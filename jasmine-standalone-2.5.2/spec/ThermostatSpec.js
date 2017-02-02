describe ("Thermostat", function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('when initialized', function () {
    it("starts at 20 degrees", function (){
      expect(thermostat.temperature).toBe(20)
    });
  });

  describe("#increase", function(){
    it("increases the temperature", function(){
      thermostat.increase(5)
      expect(thermostat.temperature).toBe(25)
    });
  });

  describe("#decrease", function(){
    it("decreases the temperature", function(){
      // debugger;
      thermostat.decrease(5)
      expect(thermostat.temperature).toBe(15)
    });
  });


});
