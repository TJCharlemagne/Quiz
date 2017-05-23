var quizQuestions = [
  ['What is the numerical form of two hundred-thirty seven?', 237],
  ['How many sides are on a conventional die? (One of a pair of dice)', 6],
  ['What is the square root of 144?', 12]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var incorrect = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
   for (var i = 0; i <arr.length; i += 1) {
     listHTML += '<li>' + arr[i] + '</li>';
   }
   listHTML += '</ol>';
   return listHTML;
}

for (var i = 0; i < quizQuestions.length; i += 1) {
  question = quizQuestions[i][0];
  answer = quizQuestions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
   correctAnswers += 1;
   correct.push(question);
  } else {
    incorrect.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right!";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions incorrect, however:</h2>'
html += buildList(incorrect);
print(html);