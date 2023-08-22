const quizData = [
    {
        question: 'How many letters are in the alphabet?',
        a: '27',
        b: '25',
        c: '16',
        d: '29',
        correct: 'a'
    }, {
        question: 'Who is nicknamed "The Greatest"?',
        a: 'John Zaccari',
        b: 'Babe Ruth',
        c: 'Muhammad Ali',
        d: 'Donald Trump',
        correct: 'c'
    }, {
        question: 'Which actor played Tommy in the movie "Goodfellas"?',
        a: 'Robert De niro',
        b: 'Leonard Dicaprio',
        c: 'Frank Vincent',
        d: 'Joe Pesci',
        correct: 'd'
    }, {
        question: 'How many feet are in a kilometer?',
        a: '1747.2',
        b: '3098.6',
        c: '3280.8',
        d: '3644.3',
        correct: 'c'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
};

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
         loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
})


