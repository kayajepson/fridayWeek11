class Ages{
  constructor(birthdate){
    this.birthdate = birthdate;
  }

  get earthAge() {
    return this.ageFinderEarth();
  }

  get mercuryAge(){
    return this.ageFinderMercury();
  }

  get venusAge(){
    return this.ageFinderVenus();
  }

  get marsAge(){
    return this.ageFinderMars();
  }

  get jupiterAge(){
    return this.ageFinderJupiter();
  }

  get maleLife(){
    return this.lifeExpectencyMale();
  }

  get femaleLife(){
    return this.lifeExpectencyFemale();
  }

  ageFinderEarth() {
    // let birthdateInput = document.querySelector('input[type="date"]');
    // let birthdateInput = new Date(this.birthdate + ' 00:00:00');
    const birthdateInput = this.birthdate;
    // let birthdate = new Date(birthdateInput.value);
    let birthdateMilli = birthdateInput.getTime();
    let today = Date.now();
    let ageMillis = today - birthdateMilli;
    let age = new Date(ageMillis);
    let ageUTC = Math.abs(age.getUTCFullYear() - 1970);
    return (ageUTC);
  }

  ageFinderMercury() {
    let mercuryAge = Math.floor(this.ageFinderEarth() / .24);
    return (mercuryAge);
  }

  ageFinderVenus() {
    let venusAge = Math.floor(this.ageFinderEarth() / .62);
    return (venusAge);
  }

  ageFinderMars() {
    let marsAge = Math.floor(this.ageFinderEarth() / 1.88);
    return (marsAge);
  }

  ageFinderJupiter() {
    let jupiterAge = Math.floor(this.ageFinderEarth() / 11.86);
    return (jupiterAge);
  }

  lifeExpectencyMale() {
    let earthAge = this.ageFinderEarth();
    if (earthAge > 79) {
      return (earthAge - 79);
    } else {
      return (79 - earthAge);
    }
  }

  lifeExpectencyFemale() {
    let earthAge = this.ageFinderEarth();
    if (earthAge > 84) {
      return (earthAge - 84);
    } else {
      return (84 - earthAge);
    }
  }
}

module.exports = {
  Ages: Ages
}
