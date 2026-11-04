'use strict';
const questions = [
  { question: 'Which component is often called the brain of a computer?', options: ['Monitor', 'Central Processing Unit (CPU)', 'Keyboard', 'Hard drive'], answer: 1, explanation: 'The CPU processes instructions and coordinates the computer’s operations.' },
  { question: 'Which type of memory loses its contents when the computer is switched off?', options: ['ROM', 'Solid-state drive (SSD)', 'RAM', 'USB flash drive'], answer: 2, explanation: 'RAM is volatile memory used to temporarily store data and programs in use.' },
  { question: 'Which of these is an input device?', options: ['Printer', 'Monitor', 'Speaker', 'Keyboard'], answer: 3, explanation: 'A keyboard sends your keystrokes into the computer as input.' },
  { question: 'What is the main purpose of an operating system?', options: ['Manage hardware and software resources', 'Create only presentations', 'Supply electrical power', 'Protect the screen from scratches'], answer: 0, explanation: 'An operating system manages resources and provides a platform for applications.' },
  { question: 'Which unit represents eight bits?', options: ['One pixel', 'One byte', 'One hertz', 'One megabyte'], answer: 1, explanation: 'A byte is a group of eight bits. Each bit can represent 0 or 1.' },
  { question: 'What does a web browser allow you to do?', options: ['Replace computer hardware', 'Increase the size of RAM', 'Access and view websites', 'Supply an internet connection by itself'], answer: 2, explanation: 'Browsers retrieve and display web content using an available network connection.' },
  { question: 'Which password is the strongest choice?', options: ['password', '12345678', 'Your first name', 'A long, unique combination of unrelated words'], answer: 3, explanation: 'Long, unique passphrases are harder to guess. Avoid reusing them across accounts.' },
  { question: 'What is phishing?', options: ['A scam that tricks people into revealing sensitive information', 'A way of upgrading a processor', 'A method of printing photos', 'A type of computer memory'], answer: 0, explanation: 'Phishing messages impersonate trusted sources to steal information such as passwords.' },
  { question: 'In a spreadsheet, what is a cell?', options: ['An entire workbook', 'The intersection of a row and a column', 'A connected printer', 'A collection of worksheets'], answer: 1, explanation: 'A cell is where a row and a column meet, and can contain data or a formula.' },
  { question: 'Why should you regularly back up important files?', options: ['To make the monitor brighter', 'To remove the need for passwords', 'To recover data after loss or damage', 'To stop every type of malware'], answer: 2, explanation: 'Backups provide additional copies so you can restore files after accidental deletion or failure.' }
];
const $ = (id) => document.getElementById(id);
let current = 0;
let answers = [];
function showQuestion() {
  const item = questions[current];
  $('question-count').textContent = `Question ${current + 1} of ${questions.length}`;
  $('progress').style.width = `${current / questions.length * 100}%`;
  document.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', current);
  $('question').textContent = item.question;
  $('options').replaceChildren();
  item.options.forEach((answer, index) => {
    const label = document.createElement('label');
    label.className = 'option';
    const input = document.createElement('input');
    input.type = 'radio'; input.name = 'answer'; input.value = index;
    input.required = true;
    const content = document.createElement('span');
    const letter = document.createElement('b');
    letter.textContent = String.fromCharCode(65 + index);
    letter.setAttribute('aria-hidden', 'true');
    content.append(letter, document.createTextNode(answer));
    label.append(input, content);
    $('options').append(label);
  });
  $('next').disabled = true;
  $('next').firstChild.textContent = current === questions.length - 1 ? 'See results ' : 'Next question ';
  $('answer-status').textContent = 'Select an answer to continue';
  $('question').focus();
}
function startQuiz() {
  current = 0; answers = [];
  $('welcome').hidden = true; $('results').hidden = true; $('quiz').hidden = false;
  $('review').hidden = true; $('review').replaceChildren();
  $('review-toggle').setAttribute('aria-expanded', 'false');
  $('review-toggle').textContent = 'Review answers';
  showQuestion();
}
$('start').addEventListener('click', startQuiz);
$('restart').addEventListener('click', startQuiz);
$('options').addEventListener('change', () => {
  $('next').disabled = false;
  $('answer-status').textContent = 'Answer selected';
});
$('quiz').addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return;
  answers.push(Number(selected.value));
  current++;
  if (current < questions.length) { showQuestion(); return; }
  const score = answers.filter((answer, index) => answer === questions[index].answer).length;
  $('quiz').hidden = true; $('results').hidden = false;
  $('score').textContent = `${score} / ${questions.length}`;
  $('result-heading').textContent = score >= 8 ? 'Great work!' : score >= 5 ? 'A solid start!' : 'Keep learning!';
  $('result-message').textContent = `You scored ${score * 10}%. ` + (score === 10 ? 'Perfect score! You know your computing essentials.' : 'Review the answers below to discover what you got right and what to practice next.');
  questions.forEach((item, index) => {
    const section = document.createElement('section'); section.className = 'review-item';
    const heading = document.createElement('h3'); heading.textContent = `${index + 1}. ${item.question}`;
    const answer = document.createElement('p');
    const correct = answers[index] === item.answer;
    answer.className = correct ? 'correct' : 'incorrect';
    answer.textContent = `${correct ? 'Correct' : 'Incorrect'} · Your answer: ${item.options[answers[index]]}`;
    const solution = document.createElement('p'); solution.textContent = `Correct answer: ${item.options[item.answer]}`;
    const explanation = document.createElement('p'); explanation.textContent = item.explanation;
    section.append(heading, answer, solution, explanation); $('review').append(section);
  });
  $('result-heading').focus();
});
$('review-toggle').addEventListener('click', () => {
  const expanded = $('review-toggle').getAttribute('aria-expanded') !== 'true';
  $('review-toggle').setAttribute('aria-expanded', String(expanded));
  $('review-toggle').textContent = expanded ? 'Hide answers' : 'Review answers';
  $('review').hidden = !expanded;
});
