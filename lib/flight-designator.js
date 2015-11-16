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
FlightDesignator.pattern = /^([A-Z0-9]{2}[A-Z]?)\s*([0-9]{0,3}[1-9]|[1-9][0-9]{0,3})\s*([A-Z]?)$/i

/**
 * Parses a flight designator
 * @param  {String} value
 * @return {FlightDesignator}
 */
FlightDesignator.parse = function( value ) {
  return new FlightDesignator().parse( value )
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
    
    if( parts == null )
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
