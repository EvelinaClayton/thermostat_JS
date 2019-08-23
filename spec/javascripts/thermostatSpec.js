"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has an initial starting temperature of 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("can increase the temperature on the thermostat", function() {
    thermostat.increase();
    expect(thermostat.temperature).toBeGreaterThan(20);
  });

  it("can decrease the temperature on the thermostat", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toBeLessThan(20);
  });

  it("has a minimum temperature of 10 degrees", function() {
    for (var i = 0; i < 10; i++) {
      thermostat.decrease();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it("has power saving mode on by default", function() {
    expect(thermostat.powerMode).toBe(true);
  });

  it("has has maximum temperature of 25 when powerMode is on", function() {
    for (var i = 20; i < 25; i++) {
      thermostat.increase();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it("power mode turns off", function() {
    thermostat.powerModeOff();
    expect(thermostat.powerMode).toBe(false);
  });

  it("when power mode is off, we can increase temperature to 32 degrees", function() {
    thermostat.powerModeOff();
    expect(thermostat.powerMode).toBe(false);
    for (var i = 20; i < 32; i++) {
      thermostat.increase();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it("has a function to reset temperature to 20 degrees", function() {
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("when the temperature is below 18 degrees", function() {
    thermostat.changeTemperature(15);
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("when the temperature is between 18 and 25 degrees", function() {
    // thermostat.changeTemperature(19);
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });


  it("when the temperature is anything else its high-usage", function() {
      thermostat.powerMode = false;
      thermostat.changeTemperature(26);
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
});  


