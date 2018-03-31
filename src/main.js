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
        if(Object.keys(SymptomSearchList.data).length < 1) {
          $("#results").append("<h1>NO RESULTS </h1>")
        } else {
          for(let i = 0; i < Object.keys(SymptomSearchList.data).length ; i++) {
            $("#results").append(
             "<ul> Speciality: " + SymptomSearchList.data[i].specialties[0].name + "</ul>"
            + "<ul> Name: " + SymptomSearchList.data[i].profile.first_name + " " + SymptomSearchList.data[i].profile.last_name + "</ul>"

            + "<ul> Address: " + SymptomSearchList.data[i].practices[0].visit_address.street + "</ul>"
            + "<ul> City: " +   SymptomSearchList.data[i].practices[0].visit_address.city + " , "
            + SymptomSearchList.data[i].practices[0].visit_address.state + " " + SymptomSearchList.data[i].practices[0].visit_address.zip + "</ul>"

            + "<ul> CALL: " + SymptomSearchList.data[i].practices[0].phones[0].number + "</ul>"

            + "<ul> Accepting New Patients: " + SymptomSearchList.data[i].practices[0].accepts_new_patients + "</ul>"
            + "<ul> Website:" + SymptomSearchList.data[i].practices[0].website + "</ul>"

            )
          }
        }
      }




  });
});
