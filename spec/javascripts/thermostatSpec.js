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
    it('has power saving mode on by default', function () {
        expect(thermostat.powerMode).toBe(true);
    });

    it('has has maximum temperature of 25 when powerMode is on', function () {
        for (var i = 20; i < 25; i++) {
            thermostat.increase();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('power mode turns off', function () {
        thermostat.powerModeOff();
        expect(thermostat.powerMode).toBe(false);
    });

    it('when power mode is off, we can increase temperature to 32 degrees', function () {
        thermostat.powerModeOff();
        expect(thermostat.powerMode).toBe(false);
        for (var i = 20; i < 32; i++) {
            thermostat.increase();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
});