let questions = [
    {
        "image": "img/schneegloeckchen.jpg",
        "question": "Wie heißt diese Blume?",
        "answer_1": "Tulpe",
        "answer_2": "Schneeglöckchen",
        "answer_3": "Löwenzahn",
        "answer_4": "Narzisse",
        "right_answer": 2
    },
    {
        "image": "img/breitwegerrich.jpg",
        "question": "Ist Breitwegerrich giftig?",
        "answer_1": "Nein, den kann man essen wie Salat.",
        "answer_2": "Roh ein wenig, aber gekocht kann man ihn doch geniesen.",
        "answer_3": "Kann Ausschlag verursachen, am besten nicht anfassen.",
        "answer_4": "Aber so was von, dem sollte man nicht zu nah kommen.",
        "right_answer": 1
    },
    {
        "image": "img/wegwarte.jpg",
        "question": "Was trifft auf die Wegwarte nicht zu?",
        "answer_1": "Blätter können im Frühling für Salat verwendet werden.",
        "answer_2": "Aus ihrer Wurzel kann Zichorienkaffee hergestellt werden.",
        "answer_3": "Die Blüten sind essbar und kandiert eine Leckerei",
        "answer_4": "Ihre Blätter sind Herzförmig mit weißer spitze",
        "right_answer": 4
    },
    {
        "image": "img/fingerhut.jpg",
        "question": "Ist fingerhut giftig?",
        "answer_1": "Nein, aber schmeckt nicht.",
        "answer_2": "Nur während Vollmond.",
        "answer_3": "Er ist hochgradig giftig, der verzehr kann zum tod führen!",
        "answer_4": "Der tötet alles umkreis von 3 Metern, bleib weg!",
        "right_answer": 3
    },
    {
        "image": "img/malve.jpg",
        "question": "Wofür ist sie bekannt?",
        "answer_1": "Als Heilpflanze, bei Entzündungen (Mund- und Rachenraum).",
        "answer_2": "Als endloses Unkraut.",
        "answer_3": "Das sie Nachts hellbalu leuchtet.",
        "answer_4": "Als die teuerste Gartenpflanze.",
        "right_answer": 1
    }
]


let nowQuestion = 0;
let rightAnswer = 0;

let AUDIO_RIGHT = new Audio('sound/correct.mp3');
    AUDIO_RIGHT.volume = 0.4;
let AUDIO_WRONG = new Audio('sound/wrong.mp3');
    AUDIO_WRONG.volume = 0.2;
let AUDIO_RESTART = new Audio('sound/bird.mp3');


function init() {
    document.getElementById('number-of-all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateNextQuestion();
    }
}

function gameIsOver() {
    return nowQuestion >= questions.length;
}


function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-screen').style = 'display: none';
    document.getElementById('win-number-of-all-questions').innerHTML = questions.length;
    document.getElementById('win-right-answer').innerHTML = rightAnswer;
}

function updateProgressBar() {
    let checkAmountOfRightQuestions = (nowQuestion + 1) / questions.length;
    checkAmountOfRightQuestions = Math.round(checkAmountOfRightQuestions * 100);
    document.getElementById('progress-bar').innerHTML = `${checkAmountOfRightQuestions}%`;
    document.getElementById('progress-bar').style.width = `${checkAmountOfRightQuestions}%`;
}


function updateNextQuestion() {
    let question = questions[nowQuestion]; //questions
    document.getElementById('question-image').src = question['image'];
    document.getElementById('quiz-question').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
    document.getElementById('number-of-question').innerHTML = nowQuestion + 1;
}


function answer(selection) {
    let question = questions[nowQuestion]; //bezieht sich auf Array an stelle 0
    let selectedNumber = selection.slice(-1); //gibt nur noch die letzte ziffer der ausgewählten id wieder z.b. 2
    let idForRightAnswer = `answer${question['right_answer']}`;

    if (checkCurrentQuestion(selectedNumber, question)) { //prüft ob die gewonnene Zahl und die Zahl aus dem array gleich sind
        PlayThrRightAnswer(selection);
    } else {
        PlayThrWrongAnswer(selection, idForRightAnswer);
    }
    document.getElementById('next-question').disabled = false; //entsperrt button (truh ist gesperrt)
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
    document.getElementById(idForRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_WRONG.play();
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
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('question-screen').style = '';
    nowQuestion = 0;
    rightAnswer = 0;
    AUDIO_RESTART.play();
    init();
}

