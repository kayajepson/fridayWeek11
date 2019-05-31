import { ageFinderEarth } from './../src/functions.js';
import { ageFinderMercury } from './../src/functions.js';
import { ageFinderVenus } from './../src/functions.js';
import { ageFinderMars } from './../src/functions.js';
import { ageFinderJupiter } from './../src/functions.js';

describe('ageFinderEarth', function() {
  it('should test if entering your birthday returns your Earth age', function() {
    let expectedAge = 29;
    let inputAge = ageFinderEarth();
    expect(expectedAge).toEqual(inputAge);
  });
});

describe('ageFinderMercury', function() {
  it('should test if entering your birthday returns your Mercury age', function() {
    let expectedAge = 120;
    let inputAge = ageFinderMercury();
    expect(expectedAge).toEqual(inputAge);
  });
});

describe('ageFinderVenus', function() {
  it('should test if entering your birthday returns your Venus age', function() {
    let expectedAge = 46;
    let inputAge = ageFinderVenus();
    expect(expectedAge).toEqual(inputAge);
  });
});

describe('ageFinderMars', function() {
  it('should test if entering your birthday returns your Mars age', function() {
    let expectedAge = 15;
    let inputAge = ageFinderMars();
    expect(expectedAge).toEqual(inputAge);
  });
});

describe('ageFinderJupiter', function() {
  it('should test if entering your birthday returns your Jupiter age', function() {
    let expectedAge = 2;
    let inputAge = ageFinderJupiter();
    expect(expectedAge).toEqual(inputAge);
  });
});
