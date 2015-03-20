var chai   = require('chai');
var expect = chai.expect;
var Lob    = require('../lib/index.js')('test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc');

describe('Countries', function() {
  describe('list', function() {
    it('should have correct defaults', function(done) {
      Lob.countries.list(function(err, res) {
        expect(res).to.have.property('object');
        expect(res).to.have.property('data');
        expect(res.data).to.be.instanceof(Array);
        return done();
      });
    });
  });
});
