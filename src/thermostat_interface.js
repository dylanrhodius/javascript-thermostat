$(document).ready(function(){

  var thermostat = new Thermostat()

  function updateTemperature(){
    $( "#temp" ).text(thermostat.temperature);
    $('#temp').attr('class', thermostat.usage());
    $( "#powersave" ).text(thermostat.powerSaveStatus());
  };



  updateTemperature()

  $( "#increase" ).click(function(){
    thermostat.increase();
    updateTemperature();
  });

  $( "#decrease" ).click(function(){
    thermostat.decrease();
    updateTemperature();
  });


  $( "#powerSaveOff_button" ).click(function(){
      thermostat.powerSaveOff();
      updateTemperature();
  });

  $( "#powerSaveOn_button" ).click(function(){
      thermostat.powerSaveOn();
      updateTemperature();
  });

  $( "#reset" ).click(function(){
      thermostat.reset();
      updateTemperature();
  });



});
