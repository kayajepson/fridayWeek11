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

  get maleLifeEarth(){
    return this.lifeExpectencyMaleEarth();
  }

  get femaleLifeEarth(){
    return this.lifeExpectencyFemaleEarth();
  }

  get maleLifeMercury(){
    return this.lifeExpectencyMaleMercury();
  }

  get femaleLifeMercury(){
    return this.lifeExpectencyFemaleMercury();
  }

  get maleLifeVenus(){
    return this.lifeExpectencyMaleVenus();
  }

  get femaleLifeVenus(){
    return this.lifeExpectencyFemaleVenus();
  }

  get maleLifeMars(){
    return this.lifeExpectencyMaleMars();
  }

  get femaleLifeMars(){
    return this.lifeExpectencyFemaleMars();
  }

  get maleLifeJupiter(){
    return this.lifeExpectencyMaleJupiter();
  }

  get femaleLifeJupiter(){
    return this.lifeExpectencyFemaleJupiter();
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

  lifeExpectencyMaleEarth() {
    let earthAge = this.ageFinderEarth();
    if (earthAge > 79) {
      return (earthAge - 79);
    } else {
      return (79 - earthAge);
    }
  }

  lifeExpectencyFemaleEarth() {
    let earthAge = this.ageFinderEarth();
    if (earthAge > 84) {
      return (earthAge - 84);
    } else {
      return (84 - earthAge);
    }
  }

  lifeExpectencyMaleMercury() {
    let mercuryAge = this.ageFinderMercury();
    if (mercuryAge > 79) {
      return (79 - mercuryAge);
    } else {
      return (mercuryAge - 79);
    }
  }

  lifeExpectencyFemaleMercury() {
    let mercuryAge = this.ageFinderMercury();
    if (mercuryAge > 84) {
      return (84 - mercuryAge);
    } else {
      return (mercuryAge - 84);
    }
  }

  lifeExpectencyMaleMars() {
    let marsAge = this.ageFinderMars();
    if (marsAge > 79) {
      return (marsAge - 79);
    } else {
      return (79 - marsAge);
    }
  }

  lifeExpectencyFemaleMars() {
    let marsAge = this.ageFinderMars();
    if (marsAge > 84) {
      return (marsAge - 84);
    } else {
      return (84 - marsAge);
    }
  }

  lifeExpectencyMaleVenus() {
    let venusAge = this.ageFinderVenus();
    if (venusAge > 79) {
      return (venusAge - 79);
    } else {
      return (79 - venusAge);
    }
  }

  lifeExpectencyFemaleVenus() {
    let venusAge = this.ageFinderVenus();
    if (venusAge > 84) {
      return (venusAge - 84);
    } else {
      return (84 - venusAge);
    }
  }

  lifeExpectencyMaleJupiter() {
    let jupiterAge = this.ageFinderJupiter();
    if (jupiterAge > 79) {
      return (jupiterAge - 79);
    } else {
      return (79 - jupiterAge);
    }
  }

  lifeExpectencyFemaleJupiter() {
    let jupiterAge = this.ageFinderJupiter();
    if (jupiterAge > 84) {
      return (jupiterAge - 84);
    } else {
      return (84 - jupiterAge);
    }
  }

}

module.exports = {
  Ages: Ages
}
