import $ from 'jquery';
import './styles.css';
import { SymptomSearch } from "./js/symptom-search.js";
// import { NameSearch } from "./js/name-search.js";

$(document).ready(function() {
  $("#symptom-button").click(function(event){
    event.preventDefault();
    let symptom = $("#symptom").val();
    $("#symptom").val("");
    $("#header").hide();
    $("#results").empty()
    $("#showErrors").empty()
    let newSymptomSearch = new SymptomSearch;
    let promise = newSymptomSearch.getDoctor(symptom);
    promise.then(
      function(response){
      let symptomSearchList = JSON.parse(response)
      if(Object.keys(symptomSearchList.data).length < 1) {
        $("#results").append("<h1>NO RESULTS </h1>")
      } else {
        for(let i = 0; i < Object.keys(symptomSearchList.data).length ; i++) {
          $("#results").append(
           "<ul> Speciality: " + symptomSearchList.data[i].specialties[0].name + "</ul>"
          + "<ul> Name: " + symptomSearchList.data[i].profile.first_name + " " + symptomSearchList.data[i].profile.last_name + "</ul>"

          + "<ul> Address: " + symptomSearchList.data[i].practices[0].visit_address.street + "</ul>"
          + "<ul> City: " +   symptomSearchList.data[i].practices[0].visit_address.city + " , "
          + symptomSearchList.data[i].practices[0].visit_address.state + " " + symptomSearchList.data[i].practices[0].visit_address.zip + "</ul>"

          + "<ul> CALL: " + symptomSearchList.data[i].practices[0].phones[0].number + "</ul>"

          + "<ul> Accepting New Patients: " + symptomSearchList.data[i].practices[0].accepts_new_patients + "</ul>"
          + "<ul> Website:" + symptomSearchList.data[i].practices[0].website + "</ul>"

          )
        }
      }
    },
    function(error) {
      $("#showErrors").text(`No results found. Error Message: ${error.message}`)
      }
    )
  })


})
