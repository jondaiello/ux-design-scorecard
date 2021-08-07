var allGradeFields = document.getElementsByClassName("grade");

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

function fillAllFields() {  
  for (var i = 0; i < allGradeFields.length; i++) {
    allGradeFields[i].value = getRandomInt();
  }
}

// fillAllFields();


function checkGrade() {
  var allGrades = [];
  var combinedGrades = 0;
  var averageGrade = 0;
  var letterGrade = "";
  
  for (var i = 0; i < allGradeFields.length; i++) {
    combinedGrades = combinedGrades + parseInt(allGradeFields[i].value)  
    averageGrade = combinedGrades / allGradeFields.length;
    averageGrade = Math.round(averageGrade);
  }
  
  for (var i = 0; i < allGradeFields.length; i++) {
    allGrades.push(allGradeFields[i]);
  }
  
  if (averageGrade == 100) {
    letterGrade = "A+";
  } else if (averageGrade >= 90) {
    letterGrade = "A";
  } else if (averageGrade >= 80) {
    letterGrade = "B";
  } else if (averageGrade >= 70) {
    letterGrade = "C";
  } else if (averageGrade >= 60) {
    letterGrade = "D";  
  } else {
    letterGrade = "F";
  }  
}

// checkGrade();