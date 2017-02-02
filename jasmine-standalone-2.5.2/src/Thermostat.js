function Thermostat () {
  this.temperature = 20
  this.MINIMUM = 10
};

Thermostat.prototype.increase = function(number){
  this.temperature += number;
};

Thermostat.prototype.decrease = function(number){
  if ((this.temperature - number) < this.MINIMUM)
    {this.temperature = this.MINIMUM;
      throw("Set at minimum temperature 10 degrees")
    }
  else this.temperature -= number
};
