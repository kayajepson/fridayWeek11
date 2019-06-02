import { Ages } from './functions.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("form#ages").submit(function(event) {
    event.preventDefault();
    let userInput = document.querySelector('input[type="date"]');
    let userCalc = new Ages(userInput.value);

    let earth = userCalc.earthAge;
    let mercury = userCalc.mercuryAge;
    let venus = userCalc.venusAge;
    let mars = userCalc.marsAge;
    let jupiter = userCalc.jupiterAge;

    let maleEarth = userCalc.maleLifeEarth;
    let maleMercury = userCalc.maleLifeMercury;
    let maleVenus = userCalc.maleLifeVenus;
    let maleMars = userCalc.maleLifeMars;
    let maleJupiter = userCalc.maleLifeJupiter;

    let femaleEarth = userCalc.femaleLifeEarth;
    let femaleMercury = userCalc.femaleLifeMercury;
    let femaleVenus = userCalc.femaleLifeVenus;
    let femaleMars = userCalc.femaleLifeMars;
    let femaleJupiter = userCalc.femaleLifeJupiter;

    let sex = $("#sex").val();
    $("#earth").text(earth).show();
    $("#mercury").text(mercury).show();
    $("#venus").text(venus).show();
    $("#mars").text(mars).show();
    $("#jupiter").text(jupiter).show();

    if (sex == "male") {
      $(".maleLabel").show();
      $("#maleEarth").text(maleEarth).show();
      $("#maleMercury").text(maleMercury).show();
      $("#maleVenus").text(maleVenus).show();
      $("#maleMars").text(maleMars).show();
      $("#maleJupiter").text(maleJupiter).show();
    } else {
      $(".femaleLabel").show();
      $("#femaleEarth").text(femaleEarth).show();
      $("#femaleMercury").text(femaleMercury).show();
      $("#femaleVenus").text(femaleVenus).show();
      $("#femaleMars").text(femaleMars).show();
      $("#femaleJupiter").text(femaleJupiter).show();
    }

  });
});
