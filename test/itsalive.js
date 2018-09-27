var expect = require('chai').expect;

describe('suma', function() {

    it('debería sumar', function() {
        expect(2+2).to.equal(4)
    });
    
    it('confirma la precisión del timer de setTimeout\'s', function (done) {
        var start = new Date();
        setTimeout(function () {
          var duration = new Date() - start;
          expect(duration).to.be.closeTo(1000, 50);
          done();
        }, 1000);
      });
});
