'use strict';

describe('Thermostat', function () {

    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('has an initial starting temperature of 20 degrees', function () {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('can increase the temperature on the thermostat', function () {
        thermostat.increase();
        expect(thermostat.temperature).toBeGreaterThan(20);
    });
    it('can decrease the temperature on the thermostat', function () {
        thermostat.decrease();
        expect(thermostat.temperature).toBeLessThan(20);
    });
    it('has a minimum temperature of 10 degrees', function () {
        for (var i = 0; i < 10; i++) {
            thermostat.decrease();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
    it('has power saving mode on by default', function() {
        expect(thermostat.powerMode).toBe(true);
    });
});