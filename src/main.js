import $ from 'jquery';
import { SymptomSearch } from "./js/symptom-search.js";

import './styles.css';



$(document).ready(function() {
  $("#symptom-button").click(function(event){
    event.preventDefault();
    let symptom = $("#symptom").val();
      $("#header").hide();
      $("#results").empty()
      $("#showErrors").empty()




  });
});
