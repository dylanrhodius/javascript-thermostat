describe ("Thermostat", function() {

  var thermostat = new Thermostat();

  describe('when initialized', function () {
    it("starts at 20 degrees", function (){
      expect(thermostat.temperature).toBe(20)
    });
  });




});
