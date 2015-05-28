describe("romanNum", function() {

  it("it will return II if the number 2 is given", function(){
    expect(romanNum(2)).to.equal("II");
  });

  it("will return XXII if the number 22 is given", function() {
    expect(romanNum(22)).to.equal("XXII");
  });

  it("will return LXVI if the number 66 is given", function() {
    expect(romanNum(66)).to.equal("LXVI");
  });

  it("will return CXX if the number 120 is given", function() {
    expect(romanNum(120)).to.equal("CXX");
  });

  it("will return MDLX if the number 1560 is given", function() {
    expect(romanNum(1560)).to.equal("MDLX");
  });

});
