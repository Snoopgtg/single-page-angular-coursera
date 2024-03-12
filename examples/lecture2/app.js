var student = {
  fullName: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('fullName').addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.fullName = document.getElementById('fullName').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.fullName.length; i++) {
    totalNameValue += student.fullName.charCodeAt(i);
  }

  // Insert result into page
  var output = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}