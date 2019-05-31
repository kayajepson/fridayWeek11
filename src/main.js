import { Ages } from './functions.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("form#ages").submit(function(event) {
    event.preventDefault();
    let userInput = document.querySelector('input[type="date"]');
    let userBday = new Date(userInput.value);
    let userCalc = new Ages(userBday);
    let earth = userCalc.earthAge;
    let mercury = userCalc.mercuryAge;
    let venus = userCalc.venusAge;
    let mars = userCalc.marsAge;
    let jupiter = userCalc.jupiterAge;
    let male = userCalc.maleLife;
    let female = userCalc.femaleLife;
    $("#earth").text(earth).show();
    $("#mercury").text(mercury).show();
    $("#venus").text(venus).show();
    $("#mars").text(mars).show();
    $("#jupiter").text(jupiter).show();
    $("#male").text(male).show();
    $("#female").text(female).show();
    // console.log(results);
  });
});
