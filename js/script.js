// Splash Screen
document.addEventListener('DOMContentLoaded', (e) => {
    let splash = document.querySelector('.splash-screen');
    setTimeout(() => {
        splash.style.display = "none";
    }, 10000);
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

let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");

let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let mixed = document.querySelector('.mixed');

let questionBox = document.querySelector('.question-box');
let question = document.querySelector(".question-box h1");
let options = document.querySelector(".options");

let stillknight = document.querySelector('.stillknight');
let runknight = document.querySelector('.runknight');
let attackknight = document.querySelector('.attackknight');


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

function randomNumber150() {
    return Math.floor(Math.random() * 150);
}
function randomNumber100() {
    return Math.floor(Math.random() * 100);
}
function randomNumber200() {
    return Math.floor(Math.random() * 200);
}

let counter = 0;

// If addition is chosed

add.addEventListener("click", function () {
    closeChooseOperator();
    showAddQuestion();
});

let globalAdd;
let globalMultiply;
let globalSubtract;
let globalDivide;

function showAddQuestion() {
    function displayAdd() {
        let randomoption1 = randomNumber150(); // 0 to 150
        let randomoption2 = randomNumber150(); // 0 to 150
        let randomoption3 = randomNumber150(); // 0 to 150
        let randomoption4 = randomNumber150(); // 0 to 150
        let randomanswerbox = Math.floor(Math.random() * 4); // 0 to 3 
        let optionarray = [option1, option2, option3, option4];
        for (let i = 0; i < 4; i++) {
            optionarray[i].removeEventListener('click', displayAdd);
        }
        globalAdd = undefined;
        let answer = optionarray[randomanswerbox];
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 90 + 10);
        question.textContent = randomNumber1 + " + " + randomNumber2 + " = ? ";
        option1.textContent = randomoption1;
        option2.textContent = randomoption2;
        option3.textContent = randomoption3;
        option4.textContent = randomoption4;
        answer.textContent = randomNumber1 + randomNumber2;
        globalAdd = answer;
        answer.addEventListener('click', displayAdd);
        if (counter > 0) {
            answer.removeEventListener('click', displayAdd);
        }
    }
    displayAdd();
};


// If subtraction is chosed

subtract.addEventListener("click", function () {
    closeChooseOperator();
    showSubtractQuestion();
});

function showSubtractQuestion() {
    function displaySubtract() {
        let randomoption1 = randomNumber100();
        let randomoption2 = randomNumber100();
        let randomoption3 = randomNumber100();
        let randomoption4 = randomNumber100();
        let randomanswerbox = Math.floor(Math.random() * 4);
        let optionarray = [option1, option2, option3, option4];
        for (let i = 0; i < 4; i++) {
            optionarray[i].removeEventListener('click', displaySubtract);
        }
        globalSubtract = undefined;
        let answer = optionarray[randomanswerbox];
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 90 + 10);
        question.textContent = randomNumber1 + " - " + randomNumber2 + " = ? ";
        option1.textContent = randomoption1;
        option2.textContent = randomoption2;
        option3.textContent = randomoption3;
        option4.textContent = randomoption4;
        answer.textContent = randomNumber1 - randomNumber2;
        globalSubtract = answer;
        answer.addEventListener('click', displaySubtract);
        if (counter > 0) {
            answer.removeEventListener('click', displaySubtract);
        }
    }
    displaySubtract();
}

// If multiplication is chosed

multiply.addEventListener("click", function () {
    closeChooseOperator();
    showMultiplyQuestion();
});

function showMultiplyQuestion() {
    function displayMultiply() {
        let randomoption1 = randomNumber200();
        let randomoption2 = randomNumber200();
        let randomoption3 = randomNumber200();
        let randomoption4 = randomNumber200();
        let randomanswerbox = Math.floor(Math.random() * 4);
        let optionarray = [option1, option2, option3, option4];
        for (let i = 0; i < 4; i++) {
            optionarray[i].removeEventListener('click', displayMultiply);
        }
        globalMultiply = undefined;
        let answer = optionarray[randomanswerbox];
        let randomNumber1 = Math.floor(Math.random() * 21);
        let randomNumber2 = Math.floor(Math.random() * 11);
        question.textContent = randomNumber1 + " x " + randomNumber2 + " = ? ";
        option1.textContent = randomoption1;
        option2.textContent = randomoption2;
        option3.textContent = randomoption3;
        option4.textContent = randomoption4;
        answer.textContent = randomNumber1 * randomNumber2;
        globalMultiply = answer;
        answer.addEventListener('click', displayMultiply);
        if (counter > 0) {
            answer.removeEventListener('click', displayMultiply);
        }
    }
    displayMultiply();
    
}

// If divide is chosed

divide.addEventListener("click", function () {
    closeChooseOperator();
    showDivideQuestion();
});


function showDivideQuestion() {
    function displayDivide() {
        let randomoption1 = randomNumber200();
        let randomoption2 = randomNumber200();
        let randomoption3 = randomNumber200();
        let randomoption4 = randomNumber200();
        let randomanswerbox = Math.floor(Math.random() * 4);
        let optionarray = [option1, option2, option3, option4];
        for (let i = 0; i < 4; i++) {
            optionarray[i].removeEventListener('click', displayDivide);
        }
        globalDivide = undefined;
        let answer = optionarray[randomanswerbox];
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 51);
        if (randomNumber2 <= (randomNumber1) / 2 && randomNumber1 % randomNumber2 == 0) {
            question.textContent = randomNumber1 + "/" + randomNumber2 + " = ? ";
            option1.textContent = randomoption1;
            option2.textContent = randomoption2;
            option3.textContent = randomoption3;
            option4.textContent = randomoption4;
            answer.textContent = randomNumber1 / randomNumber2;
        }
        else displayDivide();
        globalDivide = answer;
        answer.addEventListener('click', displayDivide);
        if (counter > 0) {
            answer.removeEventListener('click', displayDivide);
        }
    }
    displayDivide();
}


// If mixed is chosed

mixed.addEventListener("click", function () {
    counter++;
    closeChooseOperator();
    showMixedQuestion();
});


function showMixedQuestion() {
    function displayMixed() {
        let randomOperator = [showAddQuestion, showSubtractQuestion, showMultiplyQuestion, showDivideQuestion];
        let random4 = Math.floor(Math.random() * 4);
        randomOperator[random4]();
        globalAdd.addEventListener('click',displayMixed);
        globalSubtract.addEventListener('click',displayMixed);
        globalMultiply.addEventListener('click',displayMixed);
        globalAdd.addEventListener('click',displayMixed);
    }
    displayMixed();
}
