export function ageFinderEarth() {
  // let birthdateInput = document.querySelector('input[type="date"]');
  let birthdateInput = new Date('1990-02-17T00:00:00');
  // let birthdate = new Date(birthdateInput.value);
  let birthdateMilli = birthdateInput.getTime();
  let today = Date.now();
  let ageMillis = today - birthdateMilli;
  let age = new Date(ageMillis);
  let ageUTC = Math.abs(age.getUTCFullYear() - 1970);
  return (ageUTC);
}

export function ageFinderMercury() {
  let marsAge = Math.floor(ageFinderEarth() / .24);
  return (marsAge);
}
