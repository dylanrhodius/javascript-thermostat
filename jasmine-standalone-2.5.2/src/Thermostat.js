function Thermostat () {
  this.temperature = 20
  this.MIN_TEMP = 10
  this.MAX_TEMP = 32
  this._isPowerSave = false
};

Thermostat.prototype.increase = function(number){
  if (this.maxTempExceeded(number)){
    this.temperature = this.MAX_TEMP;
      throw("Temperature has been set at " + this.MAX_TEMP + " as this is maximum")
    }
  else
  this.temperature += number;
};

Thermostat.prototype.decrease = function(number){
  if ((this.temperature - number) < this.MIN_TEMP)
    {this.temperature = this.MIN_TEMP;
      throw("Temperature has been set at 10 as cannot go below")
    }
  else this.temperature -= number
};

Thermostat.prototype.powerSaveOn = function(){
    this.MAX_TEMP = 25;
    this._isPowerSave = true
};

Thermostat.prototype.powerSaveOff = function(){
    this.MAX_TEMP = 32;
    this._isPowerSave = false
};

Thermostat.prototype.maxTempExceeded = function(number){
  return ((this.temperature + number) > this.MAX_TEMP)
};
