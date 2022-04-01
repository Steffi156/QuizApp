let nowQuestion = 0;
let rightAnswer = 0;

let AUDIO_RIGHT = new Audio('sound/correct.mp3');
    AUDIO_RIGHT.volume = 0.2;
let AUDIO_WRONG = new Audio('sound/wrong.mp3');
    AUDIO_WRONG.volume = 0.1;

function theQuiz(i) {
    document.getElementById('startAGame').style = 'display: none';
    document.getElementById('show-question').style = '';
    document.getElementById('number-of-all-questions').innerHTML = topic[i].questions.length;
    AUDIO_RIGHT.play(); 
    showQuestion(i);
    }


function showQuestion(i) {
    if (gameIsOver(i)) {
        showEndScreen(i);
    } else {
        progressBar(i);
        updateNextQuestion(i);
    }
}

function gameIsOver(i) {
    return nowQuestion >= topic[i].questions.length;
}


function showEndScreen(i) {
    document.getElementById('end-screen').style = '';
    document.getElementById('show-question').style = 'display: none';
    document.getElementById('win-number-of-all-questions').innerHTML = topic[i].questions.length;
    document.getElementById('win-right-answer').innerHTML = rightAnswer;
}


function progressBar(i) {
    let checkAmountOfRightQuestions = (nowQuestion) / topic[i].questions.length;
    checkAmountOfRightQuestions = Math.round(checkAmountOfRightQuestions * 100);
    document.getElementById('progress-bar').innerHTML = `${checkAmountOfRightQuestions}%`;
    document.getElementById('progress-bar').style.width = `${checkAmountOfRightQuestions}%`;
}


function updateNextQuestion(i) {
    let question = topic[i].questions[nowQuestion]; //questions
    document.getElementById('question-image').src = question['image'];
    document.getElementById('quiz-question').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
    document.getElementById('number-of-question').innerHTML = nowQuestion + 1;
}


function answer(i, selection) {
    let question = topic[i].questions[nowQuestion]; //bezieht sich auf Array an stelle 0
    let selectedNumber = selection.slice(-1); //gibt nur noch die letzte ziffer der ausgewählten id wieder z.b. 2
    let idForRightAnswer = `answer${question['right_answer']}`;
    updateProgressBar();

    if (checkCurrentQuestion(selectedNumber, question)) { //prüft ob die gewonnene Zahl und die Zahl aus dem array gleich sind
        PlayThrRightAnswer(selection);
    } else {
        PlayThrWrongAnswer(selection, idForRightAnswer);
    }
    document.getElementById('next-question').disabled = false; //entsperrt button (truh ist gesperrt)
}


function updateProgressBar(i) {
    let checkAmountOfRightQuestions = (nowQuestion + 1) / topic[i].questions.length;
    checkAmountOfRightQuestions = Math.round(checkAmountOfRightQuestions * 100);
    document.getElementById('progress-bar').innerHTML = `${checkAmountOfRightQuestions}%`;
    document.getElementById('progress-bar').style.width = `${checkAmountOfRightQuestions}%`;
}


function checkCurrentQuestion(selectedNumber, question) {
    return selectedNumber == question['right_answer'];
}


function PlayThrRightAnswer(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success'); //.parentNode bedeuted das nicht auf die klasse mit der id zugegriffen wird, sondern auf die übergeordnete
    AUDIO_RIGHT.play();
    rightAnswer++;
}


function PlayThrWrongAnswer(selection, idForRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(selection).parentNode.classList.add('shake');
    document.getElementById(idForRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_WRONG.play();
}


function blockAllAnswers(selection) {
    document.getElementById(selection).parentNode.classList.add('pointer-events-none');
}


function nextQuestion() {
    nowQuestion++; // erhöht anzahl um 1 je click z.b. von 0 auf 1
    showQuestion();
    document.getElementById('next-question').disabled = true;
    document.getElementById('answer1').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success', 'bg-danger');
}

function restart() {
    document.getElementById('startAGame').style = '';
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('show-question').style = 'display: none';
    nowQuestion = 0;
    rightAnswer = 0;
    AUDIO_RIGHT.play();
}

