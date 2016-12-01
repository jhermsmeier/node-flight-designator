var Flight = require( '..' )
var assert = require( 'assert' )

describe( 'FlightDesignator', function() {
  describe( '#isValid()', function() {
    
    describe( 'valid', function() {
      
      var flights = [
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
      
      flights.forEach( function( flight ) {
        it( flight, function() {
          assert.strictEqual( Flight.isValid( flight ), true )
        })
      })
      
    })
    
    describe( 'invalid', function() {
      
      var flights = [
        '1',
        '23',
        'X1',
        'AS0',
        'XY00001',
        'ASDFGHGF',
      ]
      
      flights.forEach( function( flight ) {
        it( flight, function() {
          assert.strictEqual( Flight.isValid( flight ), false )
        })
      })
      
    })
    
  })
})
