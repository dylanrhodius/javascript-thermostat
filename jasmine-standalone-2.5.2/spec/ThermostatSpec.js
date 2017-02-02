describe ("Thermostat", function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('by default', function () {
    it("starts at 20 degrees", function (){
      expect(thermostat.temperature).toBe(20)
    });
    it("is in Powersave mode", function(){
        expect(thermostat._isPowerSave).toBe(true)
    });
  });

  describe("#powerSaveOn", function(){
    it("changes the temperature range", function() {
        thermostat.powerSaveOn()
        expect(thermostat.MAX_TEMP).toBe(25)
        expect(thermostat._isPowerSave).toBe(true)
    });


  });

  describe("#powerSaveOff", function(){
    it("changes the temperature range", function() {
        thermostat.powerSaveOn()
        thermostat.powerSaveOff()
        expect(thermostat.MAX_TEMP).toBe(32)
        expect(thermostat._isPowerSave).toBe(false)
    });
  });


  describe("when power save off", function(){

    beforeEach(function() {
      thermostat.powerSaveOff()
    });

    describe("#increase", function(){
      it("increases the temperature", function(){
        thermostat.increase(5)
        expect(thermostat.temperature).toBe(25)
      });
      it("until maximum temperature", function(){
        expect(function() {thermostat.increase(13)}).toThrow("Temperature has been set at 32 as this is maximum")
        expect(thermostat.temperature).toBe(32)
      });
    });

    describe("#decrease", function(){
      it("decreases the temperature", function(){

        thermostat.decrease(5)
        expect(thermostat.temperature).toBe(15)
      });

      it("until the minimum of 10 degrees", function(){
        // debugger;
        expect(function() {thermostat.decrease(11)}).toThrow("Temperature has been set at 10 as cannot go below")
        expect(thermostat.temperature).toBe(10)
      });
    });
  })

  describe("when power save on", function(){

    describe("#increase", function(){
      it("until maximum power save temperature", function(){
        thermostat.powerSaveOn()
        expect(function() {thermostat.increase(13)}).toThrow("Temperature has been set at 25 as this is maximum")
        expect(thermostat.temperature).toBe(25)
      });
    });

  });

  describe("#reset", function() {
    it("sets the temperature to 20 degrees", function() {
      thermostat.increase(5)
      thermostat.reset()
      expect(thermostat.temperature).toBe(20)
    });
  });

});
