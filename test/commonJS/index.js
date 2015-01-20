var Dispatcher = require("../../src/index"),
  chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  sinonChai = require('sinon-chai');
chai.use(sinonChai);

/*jshint -W030 */
describe('Sample Test', function() {
	var dispatcher;
	before(function() {
		dispatcher = new Dispatcher();
	// runs before all tests in this block
	});
	after(function(){
	// runs after all tests in this block
	});
	beforeEach(function(){
	// runs before each test in this block
	});
	afterEach(function(){
	// runs after each test in this block
	});
	it('should be using mocha', function() {
		if (false) {
			throw new Error('false is true, buckle up...');
		}
	});

	it('should also use sinon and sinonChai', function() {
		var event = {
				type: "ready"
			},
	    	stub = sinon.stub();
	    dispatcher.addEventListener("ready", stub);
	    dispatcher.dispatchEvent(event);
	    expect(stub).to.have.been.called;
	    expect(stub.firstCall.args[0]).to.equal(event);
	});
});