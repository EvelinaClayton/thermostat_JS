'use strict';

var Thermostat = function () {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.powerMode = true;
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
    }
};

var aThermostat = new Thermostat();
console.log(aThermostat)