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
  
  this.airlineCode = airline || ''
  this.flightNumber = number || ''
  this.operationalSuffix = suffix || ''
  
}

/**
 * Flight designator pattern (IATA/ICAO)
 * @type {RegExp}
 */
FlightDesignator.pattern = /^([A-Z0-9]{2}[A-Z]?)\s*([0-9]{1,4})\s*([A-Z]?)$/i

/**
 * Determines whether the input is a valid airline code
 * @param  {String} airlineCode
 * @return {Boolean}
 */
FlightDesignator.isValidAirlineCode = function( airlineCode ) {
  return /^([A-Z0-9]{2}[A-Z]?)$/i.test( airlineCode )
}

/**
 * Determines whether the input is a valid flight number
 * @param  {String} flightNumber
 * @return {Boolean}
 */
FlightDesignator.isValidFlightNumber = function( flightNumber ) {
  return /^([0-9]{0,3}[1-9])\s*([A-Z]?)$/i.test( flightNumber )
}

/**
 * Parses a flight designator
 * @param  {String} value
 * @return {FlightDesignator}
 */
FlightDesignator.parse = function( value ) {
  try { return new FlightDesignator().parse( value ) }
  catch( e ) { return null }
}

/**
 * FlightDesignator prototype
 * @type {Object}
 */
FlightDesignator.prototype = {
  
  constructor: FlightDesignator,
  
  parse: function( value ) {
    
    var parts = ( value + '' )
      .match( FlightDesignator.pattern )
    
    if( parts == null || /^0{1,4}$/.test( parts[2] ) )
      throw new Error( 'Invalid flight designator "' + value + '"' )
    
    this.operationalSuffix = parts.pop()
    this.flightNumber = parts.pop()
    this.airlineCode = parts.pop()
    
    return this
    
  },
  
  toString: function( spaces ) {
    return [
      this.airlineCode,
      this.flightNumber,
      this.operationalSuffix
    ].join( spaces ? ' ' : '' )
  },
  
}

// Exports
module.exports = FlightDesignator
