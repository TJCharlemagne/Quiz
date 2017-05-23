var quizQuestions = [
  ['What is the numerical form of two hundred-thirty seven?', 237],
  ['How many sides are on a coneventional die? (One of a pair of dice)' 6],
  ['What is the square root of 144?' 12]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  document.write(message);
}

for (var i = 0; i < quizQuestions.length; i += 1) {
  question = quizQuestions[i][0];
  answer = quizQuestions[i][1];
  response = parseInt(prompt(question));
}