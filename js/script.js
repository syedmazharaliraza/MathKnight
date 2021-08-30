// Splash Screen
document.addEventListener('DOMContentLoaded', (e) => {
    let splash = document.querySelector('.splash-screen');
    setTimeout(() => {
        splash.style.display = "none";
    }, 5000);
});

let playButton = document.querySelector('.play-button');
playButton.addEventListener("click", closeStartGame);

let chooseOperator = document.querySelector('.choose-operator');
let operators = document.querySelector('.operators');
let title = document.querySelector('.title');


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
let deadknight = document.querySelector('.deadknight');


let zombie = document.querySelector('.zombie');
let deadzombie = document.querySelector('.deadzombie');
let walkzombie = document.querySelector('.walkzombie');
let attackzombie = document.querySelector('.attackzombie');

let zombiehit = new Audio('sounds/zombiehit.mp3');
let knighthit = new Audio('sounds/knighthit.mp3');
let bgmusic = document.getElementById("bgmusic");

document.addEventListener('click', function() {
    bgmusic.play();
});

let backArrow = document.querySelector('.backarrow');

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

function closeChooseOperator() {
    chooseOperator.style.display = "none";
    operators.style.display = "none";
    questionBox.style.display = "block";
    options.style.display = "grid";
    backArrow.style.display = "block";
};

function openChooseOperator() {
    chooseOperator.style.display = "block";
    operators.style.display = "grid";
    questionBox.style.display = "none";
    options.style.display = "none";
    backArrow.style.display = "none";
}

let randomNumber150 = () =>  Math.floor(Math.random() * 150);
let randomNumber100 = () =>  Math.floor(Math.random() * 100);
let randomNumber200 = () =>  Math.floor(Math.random() * 200);


function killzombie() {
    options.style.display = "none";
    question.style.color = "#00ff00";
    question.textContent = "Correct !";
    stillknight.classList.add("display-none");
    runknight.classList.remove("display-none");
    runknight.classList.add("run");
    backArrow.style.display = "none";
    setTimeout(() => {
        runknight.classList.add("display-none");
        attackknight.classList.remove("display-none");
    }, 1750);
    setTimeout(() => {
        knighthit.play();
    }, 2000);
    setTimeout(() => {
        zombie.classList.add("display-none");
        deadzombie.classList.remove("display-none");
    }, 2200);
};

function killknight() {
    options.style.display = "none";
    question.style.color = "red";
    question.textContent = "Incorrect !";
    zombie.classList.add("display-none");
    walkzombie.classList.remove("display-none");
    walkzombie.classList.add("walk");
    backArrow.style.display = "none";
    setTimeout(() => {
        walkzombie.classList.add("display-none");
        attackzombie.classList.remove("display-none");
    }, 3000);
    setTimeout(() => {
        zombiehit.play();
    }, 3200);
    setTimeout(() => {
        stillknight.classList.add("display-none");
        deadknight.classList.remove("display-none");
    }, 3300);
};

function resetcorrect() {
    setTimeout(() => {
        question.style.color = "white";
        options.style.display = "grid";
        deadzombie.classList.add("display-none");
        attackknight.classList.add("display-none");
        stillknight.classList.remove("display-none");
        zombie.classList.remove("display-none");
        backArrow.style.display = "block";
    }, 3200);
}

function resetincorrect() {
    setTimeout(() => {
        question.style.color = "white";
        options.style.display = "grid";
        deadknight.classList.add("display-none");
        attackzombie.classList.add("display-none");
        stillknight.classList.remove("display-none");
        zombie.classList.remove("display-none");
        backArrow.style.display = "block";
    }, 4300);
}


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
        let random4 = Math.floor(Math.random() * 4); // 0 to 3 
        let optionarray = [option1, option2, option3, option4];
        let answer = optionarray[random4];
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 90 + 10);
        question.textContent = randomNumber1 + " + " + randomNumber2 + " = ? ";
        option1.textContent = randomoption1;
        option2.textContent = randomoption2;
        option3.textContent = randomoption3;
        option4.textContent = randomoption4;
        answer.textContent = randomNumber1 + randomNumber2;
        for (var i = 0; i < 4; i++) {
            if (optionarray[i] === answer) {
                optionarray.splice(i, 1);
            }
        }
        for (var i = 0; i < 3; i++) {
            optionarray[i].addEventListener('click', incorrectAdd);
        }
        answer.addEventListener('click', correctAdd);


        backArrow.addEventListener("click", () => {
            answer.removeEventListener('click', correctAdd);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectAdd);
            }
            openChooseOperator();
        });

        function correctAdd() {
            answer.removeEventListener('click', correctAdd);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectAdd);
            }
            killzombie();
            resetcorrect();
            setTimeout(() => {
                displayAdd();
            }, 3200);
        };
        function incorrectAdd() {
            answer.removeEventListener('click', correctAdd);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectAdd);
            }
            killknight();
            resetincorrect();
            setTimeout(() => {
                displayAdd();
            }, 4300);
        };

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
        let random4 = Math.floor(Math.random() * 4);
        let optionarray = [option1, option2, option3, option4];
        let answer = optionarray[random4];
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 90 + 10);
        if (randomNumber2 <= randomNumber1) {
            question.textContent = randomNumber1 + " - " + randomNumber2 + " = ? ";
            option1.textContent = randomoption1;
            option2.textContent = randomoption2;
            option3.textContent = randomoption3;
            option4.textContent = randomoption4;
            answer.textContent = randomNumber1 - randomNumber2;
            for (var i = 0; i < 4; i++) {
                if (optionarray[i] === answer) {
                    optionarray.splice(i, 1);
                }
            }
            for (var i = 0; i < 3; i++) {
                optionarray[i].addEventListener('click', incorrectSubtract);
            }
            answer.addEventListener('click', correctSubtract);


            backArrow.addEventListener("click", () => {
                answer.removeEventListener('click', correctSubtract);
                for (var i = 0; i < 3; i++) {
                    optionarray[i].removeEventListener('click', incorrectSubtract);
                }
                openChooseOperator();
            });

            function correctSubtract() {
                answer.removeEventListener('click', correctSubtract);
                for (var i = 0; i < 3; i++) {
                    optionarray[i].removeEventListener('click', incorrectSubtract);
                }
                killzombie();
                resetcorrect();
                setTimeout(() => {
                    displaySubtract();
                }, 3200);
            };
            function incorrectSubtract() {
                answer.removeEventListener('click', correctSubtract);
                for (var i = 0; i < 3; i++) {
                    optionarray[i].removeEventListener('click', incorrectSubtract);
                }
                killknight();
                resetincorrect();
                setTimeout(() => {
                    displaySubtract();
                }, 4300);
            };
        }
        else displaySubtract();

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
        let random4 = Math.floor(Math.random() * 4);
        let optionarray = [option1, option2, option3, option4];
        globalMultiply = undefined;
        let answer = optionarray[random4];
        let randomNumber1 = Math.floor(Math.random() * 21);
        let randomNumber2 = Math.floor(Math.random() * 11);
        question.textContent = randomNumber1 + " x " + randomNumber2 + " = ? ";
        option1.textContent = randomoption1;
        option2.textContent = randomoption2;
        option3.textContent = randomoption3;
        option4.textContent = randomoption4;
        answer.textContent = randomNumber1 * randomNumber2;
        for (var i = 0; i < 4; i++) {
            if (optionarray[i] === answer) {
                optionarray.splice(i, 1);
            }
        }
        for (var i = 0; i < 3; i++) {
            optionarray[i].addEventListener('click', incorrectMultiply);
        }
        answer.addEventListener('click', correctMultiply);

        backArrow.addEventListener("click", () => {
            answer.removeEventListener('click', correctMultiply);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectMultiply);
            }
            openChooseOperator();
        });

        function correctMultiply() {
            answer.removeEventListener('click', correctMultiply);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectMultiply);
            }
            killzombie();
            resetcorrect();
            setTimeout(() => {
                displayMultiply();
            }, 3200);
        };
        function incorrectMultiply() {
            answer.removeEventListener('click', correctMultiply);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectMultiply);
            }
            killknight();
            resetincorrect();
            setTimeout(() => {
                displayMultiply();
            }, 4300);
        };
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
        let random4 = Math.floor(Math.random() * 4);
        let optionarray = [option1, option2, option3, option4];
        let answer = optionarray[random4];
        let randomNumber1 = Math.floor(Math.random() * 100);
        let randomNumber2 = Math.floor(Math.random() * 51);
        if (randomNumber2 <= (randomNumber1) / 2 && randomNumber1 % randomNumber2 == 0) {
            question.textContent = randomNumber1 + "/" + randomNumber2 + " = ? ";
            option1.textContent = randomoption1;
            option2.textContent = randomoption2;
            option3.textContent = randomoption3;
            option4.textContent = randomoption4;
            answer.textContent = randomNumber1 / randomNumber2;
            for (var i = 0; i < 4; i++) {
                if (optionarray[i] === answer) {
                    optionarray.splice(i, 1);
                }
            }
            for (var i = 0; i < 3; i++) {
                optionarray[i].addEventListener('click', incorrectDivide);
            }
            answer.addEventListener('click', correctDivide);

            backArrow.addEventListener("click", () => {
                answer.removeEventListener('click', correctDivide);
                for (var i = 0; i < 3; i++) {
                    optionarray[i].removeEventListener('click', incorrectDivide);
                }
                openChooseOperator();
            });

            function correctDivide() {
                answer.removeEventListener('click', correctDivide);
                for (var i = 0; i < 3; i++) {
                    optionarray[i].removeEventListener('click', incorrectDivide);
                }
                killzombie();
                resetcorrect();
                setTimeout(() => {
                    displayDivide();
                }, 3200);
            };
            function incorrectDivide() {
                answer.removeEventListener('click', correctDivide);
                for (var i = 0; i < 3; i++) {
                    optionarray[i].removeEventListener('click', incorrectDivide);
                }
                killknight();
                resetincorrect();
                setTimeout(() => {
                    displayDivide();
                }, 4300);
            };
        }
        else displayDivide();
    }
    displayDivide();
}


// If mixed is chosed

mixed.addEventListener("click", function () {
    closeChooseOperator();
    showMixedQuestion();
});


function showMixedQuestion() {
    function displayMixed() {
        let r4 = Math.floor(Math.random() * 4);
        let randomoption1 = randomNumber200();
        let randomoption2 = randomNumber200();
        let randomoption3 = randomNumber200();
        let randomoption4 = randomNumber200();
        let random4 = Math.floor(Math.random() * 4);
        let optionarray = [option1, option2, option3, option4];
        let answer = optionarray[random4];
        console.log(random4);
        switch (r4) {
            case 0:
                {
                    let randomNumber1 = Math.floor(Math.random() * 100);
                    let randomNumber2 = Math.floor(Math.random() * 99);
                    question.textContent = randomNumber1 + " + " + randomNumber2 + " = ? ";
                    option1.textContent = randomoption1;
                    option2.textContent = randomoption2;
                    option3.textContent = randomoption3;
                    option4.textContent = randomoption4;
                    answer.textContent = randomNumber1 + randomNumber2;
                }
                break;
            case 1:
                {
                    function subtract() {
                        let randomNumber3 = Math.floor(Math.random() * 100);
                        let randomNumber4 = Math.floor(Math.random() * 99);
                        if (randomNumber4 <= randomNumber3) {
                            question.textContent = randomNumber3 + " - " + randomNumber4 + " = ? ";
                            option1.textContent = randomoption1;
                            option2.textContent = randomoption2;
                            option3.textContent = randomoption3;
                            option4.textContent = randomoption4;
                            answer.textContent = randomNumber3 - randomNumber4;
                        }
                        else subtract();
                    }
                    subtract();
                }
                break;
            case 2:
                {
                    let randomNumber5 = Math.floor(Math.random() * 21);
                    let randomNumber6 = Math.floor(Math.random() * 11);
                    question.textContent = randomNumber5 + " * " + randomNumber6 + " = ? ";
                    option1.textContent = randomoption1;
                    option2.textContent = randomoption2;
                    option3.textContent = randomoption3;
                    option4.textContent = randomoption4;
                    answer.textContent = randomNumber5 * randomNumber6;
                    break;
                }
            case 3:
                {
                    function divide() {
                        let randomNumber7 = Math.floor(Math.random() * 100);
                        let randomNumber8 = Math.floor(Math.random() * 51);
                        if (randomNumber8 <= (randomNumber7) / 2 && randomNumber7 % randomNumber8 == 0) {
                            question.textContent = randomNumber7 + "/" + randomNumber8 + " = ? ";
                            option1.textContent = randomoption1;
                            option2.textContent = randomoption2;
                            option3.textContent = randomoption3;
                            option4.textContent = randomoption4;
                            answer.textContent = randomNumber7 / randomNumber8;
                        }
                        else divide();
                    }
                    divide();
                    break;
                }
        }
        for (var i = 0; i < 4; i++) {
            if (optionarray[i] === answer) {
                optionarray.splice(i, 1);
            }
        }
        for (var i = 0; i < 3; i++) {
            optionarray[i].addEventListener('click', incorrectMixed);
        }
        answer.addEventListener('click', correctMixed);

        backArrow.addEventListener("click", () => {
            answer.removeEventListener('click', correctMixed);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectMixed);
            }
            openChooseOperator();
        });

        function correctMixed() {
            answer.removeEventListener('click', correctMixed);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectMixed);
            }
            killzombie();
            resetcorrect();
            setTimeout(() => {
                displayMixed();
            }, 3200);
        };
        function incorrectMixed() {
            answer.removeEventListener('click', correctMixed);
            for (var i = 0; i < 3; i++) {
                optionarray[i].removeEventListener('click', incorrectMixed);
            }
            killknight();
            resetincorrect();
            setTimeout(() => {
                displayMixed();
            }, 4300);
        };

    }
    displayMixed();
};
