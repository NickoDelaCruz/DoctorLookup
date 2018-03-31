import $ from 'jquery';
import './styles.css';
import { SymptomSearch } from "./js/symptom-search.js";
import { NameSearch } from "./js/name-search.js";

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
      $("#showErrors").text(`Opps, something went wrong: ${error.message}`)
      }
    )
  })

  $("#name-button").click(function(event){
    event.preventDefault();
    let name = $("#name").val();
    $("#name").val("");
    $("#header").hide();
    $("#results").empty()
    $("#showErrors").empty()
    let newNameSearch = new NameSearch;
    let promise = newNameSearch.getDoctor(name);
    promise.then(
      function(response) {
      let nameSearchList = JSON.parse(response)
      if(Object.keys(nameSearchList.data).length < 1) {
        $("#results").append("<h1> NO RESULTS </h1>")
      } else {
        for(let i = 0; i < Object.keys(nameSearchList.data).length ; i++) {
          $("#results").append(
            "<div class='w3'>" + "<img src='" + nameSearchList.data[i].profile.image_url + "'>" + "</div>"  +
            "<ul> First Name: " + nameSearchList.data[i].profile.first_name + "</ul>"
            + "<ul> Last Name: " + nameSearchList.data[i].profile.last_name + "</ul>"

            + "<ul> Address: " + nameSearchList.data[i].practices[0].visit_address.street + "</ul>"
            + "<ul> City: " + nameSearchList.data[i].practices[0].visit_address.city + "</ul>"
            + "<ul> State: " + nameSearchList.data[i].practices[0].visit_address.state  + "</ul>"
            + "<ul> ZIP: " + nameSearchList.data[i].practices[0].visit_address.zip + "</ul>"

            + "<ul> Phone: " + nameSearchList.data[i].practices[0].phones[0].number + "</ul>"
            + "<ul> Accepting New Patients: " + nameSearchList.data[i].practices[0].accepts_new_patients + "</ul>"
            + "<ul> Website :" + nameSearchList.data[i].practices[0].website + "</ul>"
            + "<ul> Speciality: " + nameSearchList.data[i].specialties[0].name + "</ul>"
          )}
        }
      },
      function(error) {
        $("#showErrors").append(`Opps something went wrong: ${error.message}`)
      }
    )
  })


})
