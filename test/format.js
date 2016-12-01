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
    
    it( 'lh0018 w/ spaces', function() {
      assert.equal( Flight.format('lh0018', true), 'LH 18' )
    })
    
    it( 'lh0018 w/ padding', function() {
      assert.equal( Flight.format('lh0018', false, true), 'LH0018' )
    })
    
    it( 'lh0018 w/ spaces & padding', function() {
      assert.equal( Flight.format('lh0018', true, true), 'LH 0018' )
    })
    
    it( 'lh0018C w/ padding', function() {
      assert.equal( Flight.format('lh0018c', false, true), 'LH0018C' )
    })
    
    it( 'lh0018C w/ spaces & padding', function() {
      assert.equal( Flight.format('lh0018c', true, true), 'LH 0018 C' )
    })
    
  })
})
