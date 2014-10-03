// normally this function would be in its own file.  Here, for the purpose of the book, it is just in the same file as the test
window.hello = function() {
    return "Hello World";
}

describe("Trying out the test libraries", function() {
    describe("Chai", function() {
        it("should be equal to 'expect'", function() {
            expect(hello()).to.equal("Hello World");
        });
    });
    
    describe("Sinon.js", function() {
        it("should report spy called", function() {
            var helloSpy = sinon.spy(window, "hello");
            
            expect(helloSpy.called).to.be.false;
            hello();
            expect(helloSpy.called).to.be.true;
            hello.restore();
        });
    });
});