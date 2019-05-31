export class Ages{
  constructor(birthdate){
    this.birthdate = birthdate;
    }

    get earthAge() {
      return this.ageFinderEarth();
    }
    //
    // get mercuryAge(){
    //   return ageFinderMercury();
    // }
    //
    // get venusAge(){
    //   return ageFinderVenus();
    // }
    //
    // get marsAge(){
    //   return ageFinderMars();
    // }
    //
    // get jupiterAge(){
    //   return ageFinderJupiter();
    // }

    ageFinderEarth() {
      // let birthdateInput = document.querySelector('input[type="date"]');
      let birthdateInput = new Date(this.birthdate + ' 00:00:00');
      // let birthdate = new Date(birthdateInput.value);
      let birthdateMilli = birthdateInput.getTime();
      let today = Date.now();
      let ageMillis = today - birthdateMilli;
      let age = new Date(ageMillis);
      let ageUTC = Math.abs(age.getUTCFullYear() - 1970);
      return (ageUTC);
    }

    // ageFinderMercury() {
    //   let marsAge = Math.floor(this.ageFinderEarth() / .24);
    //   return (marsAge);
    // }
    //
    // ageFinderVenus() {
    //   let venusAge = Math.floor(this.ageFinderEarth() / .62);
    //   return (venusAge);
    // }
    //
    // ageFinderMars() {
    //   let marsAge = Math.floor(this.ageFinderEarth() / 1.88);
    //   return (marsAge);
    // }
    //
    // ageFinderJupiter() {
    //   let jupiterAge = Math.floor(this.ageFinderEarth() / 11.86);
    //   return (jupiterAge);
    // }
  }





// export function ageFinderEarth() {
//   // let birthdateInput = document.querySelector('input[type="date"]');
//   let birthdateInput = new Date('1990-02-17T00:00:00');
//   // let birthdate = new Date(birthdateInput.value);
//   let birthdateMilli = birthdateInput.getTime();
//   let today = Date.now();
//   let ageMillis = today - birthdateMilli;
//   let age = new Date(ageMillis);
//   let ageUTC = Math.abs(age.getUTCFullYear() - 1970);
//   return (ageUTC);
// }
//
// // export function ageFinderMercury() {
// //   let marsAge = Math.floor(ageFinderEarth() / .24);
// //   return (marsAge);
// // }
//
// export function ageFinderMercury() {
//   let marsAge = Math.floor(this.getAge / .24);
//   return (marsAge);
// }
//
// export function ageFinderVenus() {
//   let venusAge = Math.floor(ageFinderEarth() / .62);
//   return (venusAge);
// }
//
// export function ageFinderMars() {
//   let marsAge = Math.floor(ageFinderEarth() / 1.88);
//   return (marsAge);
// }
//
// export function ageFinderJupiter() {
//   let jupiterAge = Math.floor(ageFinderEarth() / 11.86);
//   return (jupiterAge);
// }
