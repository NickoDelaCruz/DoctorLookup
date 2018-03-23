import $ from 'jquery';

// import fetchResults from "../src/doctor-inteface.js";

function getDoctor(fetchResults, badResults, search, url){

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });
