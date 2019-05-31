import { Ages } from './../src/functions.js';

describe('Ages', function() {
  it('output earth age via constructor', function() {
    let expectedAge = 29;
    let inputAge = new Ages('1990/02/01');
    expect(expectedAge).toEqual(inputAge.earthAge);
  });
});

describe('Ages', function() {
  it('output mercury age via constructor', function() {
    let expectedAge = 120;
    let inputAge = new Ages('Thu Feb 08 1990 16:00:00 GMT-0800 (Pacific Standard Time)');
    expect(expectedAge).toEqual(inputAge.mercuryAge);
  });
});

describe('Ages', function() {
  it('output venus age via constructor', function() {
    let expectedAge = 46;
    let inputAge = new Ages('Thu Feb 08 1990 16:00:00 GMT-0800 (Pacific Standard Time)');
    expect(expectedAge).toEqual(inputAge.venusAge);
  });
});

describe('Ages', function() {
  it('output mars age via constructor', function() {
    let expectedAge = 15;
    let inputAge = new Ages('Thu Feb 08 1990 16:00:00 GMT-0800 (Pacific Standard Time)');
    expect(expectedAge).toEqual(inputAge.marsAge);
  });
});

describe('Ages', function() {
  it('output jupiter age via constructor', function() {
    let expectedAge = 2;
    let inputAge = new Ages('Thu Feb 08 1990 16:00:00 GMT-0800 (Pacific Standard Time)');
    expect(expectedAge).toEqual(inputAge.jupiterAge);
  });
});

describe('Ages', function() {
  it('output life expectency for a male in US', function() {
    let expectedAge = 50;
    let inputAge = new Ages('Thu Feb 08 1990 16:00:00 GMT-0800 (Pacific Standard Time)');
    expect(expectedAge).toEqual(inputAge.maleLife);
  });
});

describe('Ages', function() {
  it('output life expectency for a female in US', function() {
    let expectedAge = 55;
    let inputAge = new Ages('Thu Feb 08 1990 16:00:00 GMT-0800 (Pacific Standard Time)');
    expect(expectedAge).toEqual(inputAge.femaleLife);
  });
});
