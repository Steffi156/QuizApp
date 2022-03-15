let questions = [
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
        "image": "img/fingerhut.jpg",
        "question": "Ist fingerhut giftig?",
        "answer_1": "Nein, den kann man essen wie Salat.",
        "answer_2": "Roh ein wenig, aber gekocht kann man ihn doch geniesen.",
        "answer_3": "Kann starke Margenkräpfe verursachen, am besten nicht anfassen.",
        "answer_4": "Aber so was von, dem sollte man nicht zu nah kommen.",
        "right_answer": 3
    },
    {
        "image": "img/fingerhut.jpg",
        "question": "Frage?",
        "answer_1": "Antwort_1",
        "answer_2": "Antwort_2",
        "answer_3": "Antwort_3",
        "answer_4": "Antwort_4",
        "right_answer": 2
    },
]


let nowQuestion = 0;


function init() {
    document.getElementById('number-of-all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (nowQuestion >= questions.length) {
        finalScreen();
    } else {
        let question = questions[nowQuestion];
        document.getElementById('question-image').src = question['image'];
        document.getElementById('quiz-question').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer_1'];
        document.getElementById('answer2').innerHTML = question['answer_2'];
        document.getElementById('answer3').innerHTML = question['answer_3'];
        document.getElementById('answer4').innerHTML = question['answer_4'];
        document.getElementById('number-of-question').innerHTML = nowQuestion + 1;
    }
}


function answer(selection) {
    let question = questions[nowQuestion]; //bezieht sich auf Array an stelle 0
    console.log('selected answer is ', selection); //gibt id der ausgewälten antwort wieder z.b. answer2
    let selectedNumber = selection.slice(-1); //gibt nur noch die letzte ziffer der ausgewählten id wieder z.b. 2
    console.log('selection Number is ', selectedNumber); //gibt gewonnene Zahl in console aus
    console.log('Current question is ', question['right_answer']); //gibt den wert hinter right_answer aus dem Array an stelle 0 wieder

    let idForRightAnswer = `answer${question['right_answer']}`;

    if (selectedNumber == question['right_answer']) { //pr+üft ob die gewonnene Zahl und die zahl aus dem array gleich sind
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success'); //.parentNode bedeuted das nicht auf die klasse mit der id zugegriffen wird, sondern auf die übergeordnete
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idForRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-question').disabled = false; //entsperrt button (truh ist gesperrt)
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


function finalScreen() {
    document.getElementById('question-image').src = ('img/herbs.jpg');
    document.getElementById('answer1').parentNode.innerHTML = '';
    document.getElementById('answer2').parentNode.innerHTML = '';
    document.getElementById('answer3').parentNode.innerHTML = '';
    document.getElementById('answer4').parentNode.innerHTML = '';
}
