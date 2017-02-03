$(document).ready(function(){

  var thermostat = new Thermostat()

  function updateTemperature(){
    $( "#temp" ).text(thermostat.temperature);
    $('#temp').attr('class', thermostat.usage());
    $( "#powersave" ).text(thermostat.powerSaveStatus());
  };

  $.get( "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=adeca31274f85c014d83ed995baf94d4", function( response ) {
    $("#weather").text(response.name) +
    $("#weather").append(": ")
    $("#weather").append(Math.floor(response.main.temp))
    $("#weather").append("°C")
});

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
