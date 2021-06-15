function Question(text, choices, answers) {
    this.text = text;
    this.choices = choices;
    this.answers = answers;
}

Question.prototype = {
    isCorrectAnswer(option) {
        return this.answers === option;
    },
}

//############QUIZ##########

function Quiz(questions) {
    this.questions = questions;
    this.score = null;
    this.questionIndex = 0;
}

Quiz.prototype = {

    getQuestion() {
        return this.questions[this.questionIndex];

    },

    isEnded() {

        return this.questions.length === this.questionIndex;
    },

    _check(option) {
        if (this.getQuestion().isCorrectAnswer(option)){
            this.score++;
        }
        this.questionIndex++;

    }
};


//###########OPERATION#############

function populate(){
    if (test.isEnded()){
        ShowScores();
    }else{
        var element = document.getElementById("question");
        element.innerHTML= test.getQuestion().text;

        var element2 = test.getQuestion().choices;
        for (var i = 0; i< element2.length; i++){
            var element1=document.getElementById("choice"+i);
            element1.innerHTML= element2[i];    
            check("btn"+i, element2[i]) ;     
        }
        showProgress();
    }
}

function check(id, option){
    var button = document.getElementById(id);
    button.onclick= function(){
        test._check(option);  
        populate();
    }

}

function showProgress(){
    var currentQuestionNumber= test.questionIndex+1;
    var element =  document.getElementById("progress");
    element.innerHTML="Question "+ currentQuestionNumber + " of "+ test.questions.length;
}

function ShowScores(){
     var lastPage="<h1> Results </h1>";
     lastPage +="<h2 id='score'> Yourscore:"+test.score+"</h2>";
     var element3= document.getElementById("quiz");
     element3.innerHTML=lastPage;
}

var questions = [
    new Question("What is the capital of India", ["Mumbai", "Delhi", "Chennai", "Kolkata"], "Delhi"),
    new Question("What is the capital of Tamil Nadu", ["Mumbai", "Delhi", "Chennai", "Kolkata"], "Chennai"),
    new Question("What is the capital of Maharastra", ["Mumbai", "Delhi", "Chennai", "Kolkata"], "Mumbai"),
    new Question("What is the capital of West Bengal", ["Mumbai", "Delhi", "Chennai", "Kolkata"], "Kolkata")
];

var test = new Quiz(questions);

populate();