/**
 * FlightDesignator
 * @constructor
 * @param {String} airline
 * @param {String} number
 * @param {String} suffix
 * @return {FlightDesignator}
 */
function FlightDesignator( airline, number, suffix ) {
  
  if( !(this instanceof FlightDesignator) )
    return new FlightDesignator( airline, number, suffix )
  
  this.airlineCode = airline
  this.flightNumber = parseInt( number, 10 )
  this.operationalSuffix = suffix || ''
  
}

/**
 * Flight designator pattern (IATA/ICAO)
 * NOTE: This pattern DOES NOT validate the flight number
 * (i.e. it does match invalid '0000' flight numbers)
 * @type {RegExp}
 */
FlightDesignator.pattern = /^([A-Z0-9]{2}[A-Z]?)\s*([0-9]{1,4})\s*([A-Z]?)$/i

/** @type {RegExp} IATA/ICAO airline code pattern */
FlightDesignator.airlinePattern = /^([A-Z0-9]{2}[A-Z]?)$/i

/**
 * Flight number pattern
 * NOTE: This regular expression checks for two things
 * by utilizing a lookahead: The first group checks (via the lookahead)
 * if the number is non-zero, the second whether it is between 1-4 chars long
 * @type {RegExp}
 */
FlightDesignator.flightPattern = /(?=^0*[1-9][0-9]*\s*[A-Z]?$)(?:^([0-9]{1,4})\s*([A-Z]?)$)/

/** @type {RegExp} Operational suffix test pattern */
FlightDesignator.suffixPattern = /^[A-Z]$/i

/**
 * Determine whether the input is a valid flight designator
 * @param {String} designator
 * @return {Boolean}
 */
FlightDesignator.isValid = function( designator ) {
  var parts = ( designator + '' ).match( FlightDesignator.pattern )
  return parts != null && FlightDesignator.isValidFlightNumber( parts[2] )
}

/**
 * Determines whether the input is a valid airline code
 * @param {String} airlineCode
 * @return {Boolean}
 */
FlightDesignator.isValidAirlineCode = function( airlineCode ) {
  return FlightDesignator.airlinePattern.test( airlineCode )
}

/**
 * Determines whether the input is a valid flight number
 * @param {String} flightNumber
 * @return {Boolean}
 */
FlightDesignator.isValidFlightNumber = function( flightNumber ) {
  return FlightDesignator.flightPattern.test( flightNumber )
}

/**
 * Determine whether the input is a valid operational suffix
 * @param {String} suffix
 * @return {Boolean}
 */
FlightDesignator.isValidSuffix = function( suffix ) {
  return suffix == null || suffix === '' ? true :
    FlightDesignator.suffixPattern.test( suffix )
}

/**
 * Parses a flight designator
 * @param {String} value
 * @return {FlightDesignator|null}
 */
FlightDesignator.parse = function( value ) {
  try { return new FlightDesignator().parse( value ) }
  catch( e ) { return null }
}

/**
 * Parses and formats a flight designator
 * @param {String} value
 * @param Boolean} spaces
 * @return {String}
 */
FlightDesignator.format = function( value, spaces ) {
  return new FlightDesignator().parse( value ).toString( spaces )
}

/**
 * FlightDesignator prototype
 * @type {Object}
 */
FlightDesignator.prototype = {
  
  constructor: FlightDesignator,
  
  /**
   * Check whether this flight designator is valid
   * @return {Boolean}
   */
  isValid: function() {
    return FlightDesignator.isValidAirlineCode( this.airlineCode ) &&
      FlightDesignator.isValidFlightNumber( this.flightNumber ) &&
      FlightDesignator.isValidSuffix( this.operationalSuffix )
  },
  
  /**
   * Parse a flight designator
   * @param {String} value
   * @throws {Error} If value is an invalid designator
   * @return {FlightDesignator}
   */
  parse: function( value ) {
    
    var parts = ( value + '' ).match( FlightDesignator.pattern )
    
    if( parts == null || !FlightDesignator.isValidFlightNumber( parts[2] ) )
      throw new Error( 'Invalid flight designator "' + value + '"' )
    
    this.operationalSuffix = parts.pop()
    this.flightNumber = parseInt( parts.pop(), 10 )
    this.airlineCode = parts.pop()
    
    return this
    
  },
  
  /**
   * Format the flight designator
   * @param {Boolean} spaces - whether or not to separate with spaces
   * @return {String}
   */
  toString: function( spaces ) {
    return [
      this.airlineCode.toUpperCase(),
      this.flightNumber,
      this.operationalSuffix.toUpperCase()
    ].join( spaces ? ' ' : '' )
  },
  
}

// Exports
module.exports = FlightDesignator
