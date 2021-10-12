"use strict";

function sub() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var country = document.getElementById("country").value;

  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = fname;
  cell2.innerHTML = lname;
  cell3.innerHTML = country;
  document.getElementById("basic").reset();
}

function refreshPage() {
  window.location.reload();
}
