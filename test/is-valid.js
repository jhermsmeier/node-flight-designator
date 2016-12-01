var Flight = require( '..' )
var assert = require( 'assert' )

var validFlights = [
  'U24511',
  'LH2054',
  'AS33',
  'KLM645',
  'YYY9999A',
  'AS33C',
  'X11',
  '23 1234',
  '123',
  'R6750',
  'AB6430',
  '4U050',
  'LH180',
]

var invalidFlights = [
  '1',
  '23',
  'X1',
  'AS0',
  'XY00001',
  'ASDFGHGF',
]

describe( 'FlightDesignator', function() {
  
  describe( '.isValid()', function() {
    
    describe( 'valid', function() {
      
      validFlights.forEach( function( flight ) {
        it( flight, function() {
          assert.strictEqual( Flight.isValid( flight ), true )
        })
      })
      
    })
    
    describe( 'invalid', function() {
      
      invalidFlights.forEach( function( flight ) {
        it( flight, function() {
          assert.strictEqual( Flight.isValid( flight ), false )
        })
      })
      
    })
    
  })
  
  describe( '#isValid()', function() {
    
    describe( 'valid', function() {
      
      validFlights.forEach( function( flight ) {
        it( flight, function() {
          assert.strictEqual( Flight.parse( flight ).isValid(), true )
        })
      })
      
    })
    
    describe( 'invalid', function() {
      
      invalidFlights.forEach( function( flight ) {
        it( flight, function() {
          var airline = flight.slice( 0, 2 )
          var number = flight.slice( 2, 6 )
          var suffix = flight.slice( 6 )
          assert.strictEqual( new Flight( airline, number, suffix ).isValid(), false )
        })
      })
      
    })
    
  })
  
})
