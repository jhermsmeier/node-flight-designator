var Flight = require( '..' )
var assert = require( 'assert' )

describe( 'FlightDesignator', function() {
  describe( 'parse', function() {
    
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
    
  })
})
