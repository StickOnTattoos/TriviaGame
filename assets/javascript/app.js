var time = 100;
var timeInterval;
var questions = [
    {
        question: "What color are aircraft black boxes?",
        answers: ["Orange", "Yellow", "Black", "Green"],
        answerIndex: 0
    },
    {
        question: "In what state was Tennessee Williams born in?",
        answers: ["Mississippi", "Tennessee", "Florida", "California"],
        answerIndex: 0
    },
    {
        question: "What kind of animal is a jackrabbit?",
        answers: ["Rabbit", "Jackalope", "Hare", "Chupacabra"],
        answerIndex: 2
    },
    {
        question: "How long is New Zealands Ninety Mile Beach?",
        answers: ["1 mile", "25 miles", "55 miles", "300 feet"],
        answerIndex: 2
    },
    {
        question: "Before Mount Everest was discovered, what was the tallest mountain?",
        answers: ["Kilimanjaro", "Everest", "Matterhorn",],
        answerIndex: 1
    },
    {
        question: "In which month does Russia celebrate the October Revolution?",
        answers: ["September", "October", "November", "March"],
        answerIndex: 2
    },
];

$("#timer").text(time);
renderQuestions();

$("#start").on("click", function () {
    $("#intro").addClass("hidden");
    $("#trivia").removeClass("hidden");
    $("#submit").removeClass("hidden");
    $("#reset").removeClass("hidden");
    startTimer();
});

function renderQuestions() {

    questions.forEach(function (question, index) {
        var $form = $("<form>");
        var $question = $("<h3>").text(question.question);

        $form.append($question);

        question.answers.forEach(function (answer, i) {
            var $input = $('<input type="radio">');
            $input.attr("value", answer);
            $input.attr("name", index);
            $form.append($input);
            $form.append(answer);
        });

        $("#questions").append($form);
    });
}

function checkTrivia() {
    var $forms = $("form");
    $forms.each(function (i, elem) {
        $(elem).find("input:checked").each(function (i, elem) {
           var name = $(this).attr("name");
            console.log(elem);
        });
    })
}

function startTimer() {
    timeInterval = setInterval(function () {
        time--;
        if (time === 0) {
            stopTimer();
            checkTrivia();
        }
        $("#timer").text(time);
    }, 1000);
}

function stopTimer() {
    clearInterval(timeInterval);
}

$(".btn").on("click", function () {
    
    if (this.id === "submit") {
        console.log("submit");
        stopTimer();
        checkTrivia();

    }
    else {
        console.log("reset");
        time = 120;
        $("input[type=\"radio\"]").prop("checked", false);
        startTimer();
    }
});

