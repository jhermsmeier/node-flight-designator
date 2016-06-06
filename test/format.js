var Flight = require( '..' )
var assert = require( 'assert' )

describe( 'FlightDesignator', function() {
  describe( '#format()', function() {
    
    it( 'YYY 9999 A', function() {
      assert.equal( Flight.format('YYY 9999 A'), 'YYY9999A' )
    })
    
    it( '4U050', function() {
      assert.equal( Flight.format('4U050'), '4U50' )
    })
    
    it( 'lh0018', function() {
      assert.equal( Flight.format('lh0018'), 'LH18' )
    })
    
  })
})
