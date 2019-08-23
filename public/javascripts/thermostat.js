'use strict';

var Thermostat = function () {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.powerMode = true;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.MAX_LIMIT_PSM_ON = 25;
};

Thermostat.prototype = {
    getCurrentTemperature: function () {
        return this.temperature;
    },
    increase: function () {
        this.temperature += 1;
    },
    decrease: function () {
        if (this.isMinimumTemperature()) {
            return;
        }
        this.temperature -= 1;
    },

    isMinimumTemperature: function () {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    },

    powerModeOff: function () {
        return this.powerMode = false;
    },

    resetTemperature: function() {
      this.DEFAULT_TEMPERATURE;
    },

    changeTemperature: function(num) {
       this.temperature = num; 
    },

    energyUsage: function() {
      if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
        return 'low-usage';
      }
      if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
        return 'medium-usage';
      }
      return 'high-usage';
    },
};


