'use strict';

describe('Thermostat', function () {

    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('has an initial starting temperature of 20 degrees', function() {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('can increase the temperature on the thermostat', function() {
        thermostat.increase(); 
       expect(thermostat.temperature).toBeGreaterThan(20);
    });
});