// Splash Screen
document.addEventListener('DOMContentLoaded', (e) => {
    let splash = document.querySelector('.splash-screen');
    setTimeout(() => {
        splash.style.display = "none";
    }, 4000);
});

// Starting game on clicking play button
let playButton = document.querySelector('.play-button');
playButton.addEventListener("click", closeStartGame);

// Choose mathematical operations window
let chooseOperator = document.querySelector('.choose-operator');
let operators = document.querySelector('.operators');
let title = document.querySelector('.title');

function closeStartGame() {
    playButton.style.display = 'none';
    title.style.display = 'none';
    chooseOperator.style.display = 'block';
    operators.style.display = 'grid';

};

function openStartGame() {
    playButton.style.display = 'block';
    title.style.display = 'block';
    chooseOperator.style.display = 'none';
    operators.style.display = 'none';
}

// When operator is clicked

let option1 = document.querySelector(".option1 h1");
let option2 = document.querySelector(".option2 h1");
let option3 = document.querySelector(".option3 h1");
let option4 = document.querySelector(".option4 h1");

let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let mixed = document.querySelector('.mixed');

let questionBox = document.querySelector('.question-box');
let question = document.querySelector(".question-box h1");
let options = document.querySelector(".options");



function closeChooseOperator() {
    chooseOperator.style.display = "none";
    operators.style.display = "none";
    questionBox.style.display = "block";
    options.style.display = "grid";
};

function openChooseOperator() {
    chooseOperator.style.display = "block";
    operators.style.display = "grid";
    questionBox.style.display = "none";
    options.style.display = "none";
}

// If addition is chosed

add.addEventListener("click", function () {
    closeChooseOperator();
    showAddQuestion();
});


function showAddQuestion() {
    let randomoption1 = Math.floor(Math.random() * 150);
    let randomoption2 = Math.floor(Math.random() * 150);
    let randomoption3 = Math.floor(Math.random() * 150);
    let randomoption4 = Math.floor(Math.random() * 150);
    let randomanswerbox = Math.floor(Math.random() * 4);
    let optionarray = [option1, option2, option3, option4]; 
    let answer = optionarray[randomanswerbox];

    function reloadAdd() {
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 90 + 10);
        question.textContent = randomNumber1 + " + " + randomNumber2 + " = ? ";
        option1.textContent = randomoption1;
        option2.textContent = randomoption2;
        option3.textContent = randomoption3;
        option4.textContent = randomoption4;
        answer.textContent = randomNumber1 + randomNumber2;
    }
    reloadAdd();
    answer.addEventListener('click', () => {
        reloadAdd();
        console.log("clicked");
    });
}
