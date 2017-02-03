var thermostat = new Thermostat()



$( "#temp" ).text(function(){
  return thermostat.temperature
});

$( "#increase_button" ).click(function(){

  thermostat.increase(2);

});
