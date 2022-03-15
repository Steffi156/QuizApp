let questions = [
    {
        "image": "img/herbs.jpg",
        "question": "Ist Breitwegerrich giftig?",
        "answer_1": "Nein, den kann man essen wie Salat.",
        "answer_2": "Roh ein wenig, aber gekocht kann man ihn doch geniesen.",
        "answer_3": "Kann starke Margenkräpfe und Ausschlag verursachen, am besten nicht anfassen.",
        "answer_4": "Aber so was von, dem sollte man nicht zu nah kommen.",
        "right_answer": 1
    },
    {
        "image": "img/fingerhut.jpg",
        "question": "Ist Breitwegerrich giftig?",
        "answer_1": "Nein, den kann man essen wie Salat.",
        "answer_2": "Roh ein wenig, aber gekocht kann man ihn doch geniesen.",
        "answer_3": "Kann starke Margenkräpfe und Ausschlag verursachen, am besten nicht anfassen.",
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
    document.getElementById('numberOfAllQuestions').innerHTML = questions.length; 
    showQuestion();
}

function showQuestion() {
    let question = questions[nowQuestion];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let
    document.getElementById('answer1').classList = add.
}