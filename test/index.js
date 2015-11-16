var Flight = require( '..' )
var assert = require( 'assert' )

describe( 'FlightDesignator', function() {
  describe( '#parse()', function() {
    
    describe( 'valid', function() {
      
      it( 'U24511', function() {
        var result = Flight.parse( 'U24511' )
        assert.deepEqual( result, {
          airlineCode: 'U2',
          flightNumber: '4511',
          operationalSuffix: '',
        })
      })
      
      it( 'LH2054', function() {
        var result = Flight.parse( 'LH2054' )
        assert.deepEqual( result, {
          airlineCode: 'LH',
          flightNumber: '2054',
          operationalSuffix: '',
        })
      })
      
      it( 'AS33', function() {
        var result = Flight.parse( 'AS33' )
        assert.deepEqual( result, {
          airlineCode: 'AS',
          flightNumber: '33',
          operationalSuffix: '',
        })
      })
      
      it( 'KLM645', function() {
        var result = Flight.parse( 'KLM645' )
        assert.deepEqual( result, {
          airlineCode: 'KLM',
          flightNumber: '645',
          operationalSuffix: '',
        })
      })
      
      it( 'YYY9999A', function() {
        var result = Flight.parse( 'YYY9999A' )
        assert.deepEqual( result, {
          airlineCode: 'YYY',
          flightNumber: '9999',
          operationalSuffix: 'A'
        })
      })
      
      it( 'AS33C', function() {
        var result = Flight.parse( 'AS33C' )
        assert.deepEqual( result, {
          airlineCode: 'AS',
          flightNumber: '33',
          operationalSuffix: 'C',
        })
      })
      
      it( 'X11', function() {
        var result = Flight.parse( 'X11' )
        assert.deepEqual( result, {
          airlineCode: 'X1',
          flightNumber: '1',
          operationalSuffix: '',
        })
      })
      
      it( '23 1234', function() {
        var result = Flight.parse( '23 1234' )
        assert.deepEqual( result, {
          airlineCode: '23',
          flightNumber: '1234',
          operationalSuffix: '',
        })
      })
      
      it( '123', function() {
        var result = Flight.parse( '123' )
        assert.deepEqual( result, {
          airlineCode: '12',
          flightNumber: '3',
          operationalSuffix: '',
        })
      })
      
      it( 'R6750', function() {
        var result = Flight.parse( 'R6750' )
        assert.deepEqual( result, {
          airlineCode: 'R6',
          flightNumber: '750',
          operationalSuffix: '',
        })
      })
      
      it( 'AB6430', function() {
        var result = Flight.parse( 'AB6430' )
        assert.deepEqual( result, {
          airlineCode: 'AB',
          flightNumber: '6430',
          operationalSuffix: '',
        })
      })
      
    })
    
    describe( 'invalid', function() {
      
      it( '1', function() {
        assert.throws( function() {
          Flight.parse( '1' )
        })
      })
      
      it( '23', function() {
        assert.throws( function() {
          Flight.parse( '23' )
        })
      })
      
      it( 'X1', function() {
        assert.throws( function() {
          Flight.parse( 'X1' )
        })
      })
      
      it( 'AS0', function() {
        assert.throws( function() {
          Flight.parse( 'AS0' )
        })
      })
      
      it( 'XY00001', function() {
        assert.throws( function() {
          Flight.parse( 'XY00001' )
        })
      })
      
      it( 'ASDFGHGF', function() {
        assert.throws( function() {
          Flight.parse( 'ASDFGHGF' )
        })
      })
      
    })
    
  })
})
