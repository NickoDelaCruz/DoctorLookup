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
      let newSymptomSearch = new SymptomSearch;
      let promise = newSymptomSearch.getDoctor(symptom);
      promise.then(function(response) {
        let SymptomSearchList = JSON.parse(response)
        if (Object.keys(SymptomSearchList.data).length < 1) 
        {
         $("#results").append("<h1>NO RESULTS </h1>")
       } else {
         for (let 1 = 0; i < Object.keys(sickList.data).length; i++)
         {
          $("#results").append(

          )
         }
       }
      }




  });
});
