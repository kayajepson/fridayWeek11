import { ageFinderEarth } from './../src/functions.js';
import { ageFinderMercury } from './../src/functions.js';

describe('ageFinderEarth', function() {
  it('should test if entering your birthday returns your Earth age', function() {
    let expectedAge = 29;
    let inputAge = ageFinderEarth();
    expect(expectedAge).toEqual(inputAge);
  });
});

describe('ageFinderMercury', function() {
  it('should test if entering your birthday returns your Earth age', function() {
    let expectedAge = 120;
    let inputAge = ageFinderMercury();
    expect(expectedAge).toEqual(inputAge);
  });
});
