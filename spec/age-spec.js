import { ageFinderEarth } from './../src/functions.js';

describe('ageFinderEarth', function() {

  it('should test if entering your birthday returns your Earth age', function() {
    let testAge = 29;
    let inputAge = ageFinderEarth();
    expect(testAge).toEqual(inputAge);
  });

});
