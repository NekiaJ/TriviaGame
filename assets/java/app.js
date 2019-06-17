// External Java/jQuery file 
// Triva Game
// GW Coding Boot Camp
// June 2019

$(document).ready(function () {

 
  


  var questionOne = {
        question: "Which Disney character started life as Steamboat Willie?",
        answerChoice: [ "Mickey Mouse","Roger Rabbit","Donald Duck","Willy Wonka"],
        rightAnswer: 0,
       };
 

 var questionTwo = {
        question: "In The Jungle Book who teaches Mowgli about The Bare Necesseties of life?",
        answerChoice_2:["Kaloo","Baloo","Babar","Kaa" ],
        rightAnswer: 1,
    };
    

 
  var questionThree = {
     question: "Cruella de Vil is the villain in which Disney movie?",
     answerChoice_3:["The Wiz","Devil Wears Prada","101 Dalmatians","Beauty and the Beast"],
     rightAnswer: 2,
    };


 var questionFour = {
    question:"Which Disney princess has a raccoon as a sidekick?",
    answerChoice_4:["Elsa","Pocahontas","Snow White","Jasmine"],
    rightAnswer: 1,
    
};

var questionFive = {
    question:"What is the name of Bambi's rabbit friend?",
    answerChoice_5:["Bumper","Hunter","Thomas","Thumper"],
    rightAnswer: 3,
};

// hide question/answer div

$("#questionDiv").hide();
// every time start button clicked: timer starts, questions and answer choices print to the screen 


// start button should disapear after being clicked DONE
// questions and answer options should appear to dom
// timer begins to count down DONE
///////////////////////////////
// Start btn
$("#startBtn").click(function(){
    //        // alert(" test");
       $("#startBtn").hide();
       $("#questionDiv").show();
        startTimer();
        displayQuest();
       // displayQuest_two();
});



// timer ////////////////////
var number = 30;
var intervalId;

$("#startBtn").on("click",startTimer);


function startTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement,1000);
    
}

 function decrement(){
    number--;
    $("#timer").html("<h2>" + number + "</h2");
        if (number === 0){
            stop();
            alert("Times Up!");
        }

 }

// stop timer///////////
 function stop(){
     clearInterval(intervalId);

 }


        
// end timer
///////////////////////////////////////////////////////////////////////
//DISPLAY QUESTIONS

// WHERE IM STUCK
//var count = 0;
function displayQuest() {
         document.getElementById("questOne").innerHTML = questionOne["question"];
         document.getElementById("questTwo").innerHTML = questionTwo["question"];
         document.getElementById("questThree").innerHTML = questionThree["question"];
         document.getElementById("questFour").innerHTML = questionFour["question"];
         document.getElementById("questFive").innerHTML = questionFive["question"];
        //document.getElementById("questOne").innerHTML = questionOne["question"];

}

//questionOne.answerChoice.forEach(displayAnswer_Choice);

function displayAnswer_Choice1() {
    var x = questionOne.answerChoice[0];
    var y = questionOne.answerChoice[1];
    var z = questionOne.answerChoice[2];
    var a = questionOne.answerChoice[3];
    //console.log(x);
    document.getElementById("answer1").innerHTML = x.toString();
    document.getElementById("answer2").innerHTML = y.toString();
    document.getElementById("answer3").innerHTML = z.toString();
    document.getElementById("answer4").innerHTML = a.toString();
   
    //document.getElementById("ansOne").innerHTML += x.toString();
    //document.getElementsByTagName("inlineRadio1"). innerHTML += item;

}
displayAnswer_Choice1();




//Answer to question 2//////////////////////////////////////////////

function displayAnswer_Choice2() {
var x = questionTwo.answerChoice_2[0];
var y = questionTwo.answerChoice_2[1];
var z = questionTwo.answerChoice_2[2];
var a = questionTwo.answerChoice_2[3];
//console.log(x);
document.getElementById("answer5").innerHTML = x.toString();
document.getElementById("answer6").innerHTML = y.toString();
document.getElementById("answer7").innerHTML = z.toString();
document.getElementById("answer8").innerHTML = a.toString();

//document.getElementById("ansOne").innerHTML += x.toString();
//document.getElementsByTagName("inlineRadio1"). innerHTML += item;

}
displayAnswer_Choice2();

//Answer to question 3/////////////////////////////////

function displayAnswer_Choice3() {
    var x = questionThree.answerChoice_3[0];
    var y = questionThree.answerChoice_3[1];
    var z = questionThree.answerChoice_3[2];
    var a = questionThree.answerChoice_3[3];
    //console.log(x);
    document.getElementById("answer9").innerHTML = x.toString();
    document.getElementById("answer10").innerHTML = y.toString();
    document.getElementById("answer11").innerHTML = z.toString();
    document.getElementById("answer12").innerHTML = a.toString();
    
    //document.getElementById("ansOne").innerHTML += x.toString();
    //document.getElementsByTagName("inlineRadio1"). innerHTML += item;
    
    }
    displayAnswer_Choice3();

    //Answer to question 4/////////////////////////////////

function displayAnswer_Choice4() {
    var x = questionFour.answerChoice_4[0];
    var y = questionFour.answerChoice_4[1];
    var z = questionFour.answerChoice_4[2];
    var a = questionFour.answerChoice_4[3];
    //console.log(x);
    document.getElementById("answer13").innerHTML = x.toString();
    document.getElementById("answer14").innerHTML = y.toString();
    document.getElementById("answer15").innerHTML = z.toString();
    document.getElementById("answer16").innerHTML = a.toString();
    
    //document.getElementById("ansOne").innerHTML += x.toString();
    //document.getElementsByTagName("inlineRadio1"). innerHTML += item;
    
    }
    displayAnswer_Choice4();
///// Question 5 ////////////
    function displayAnswer_Choice5() {
        var x = questionFive.answerChoice_5[0];
        var y = questionFive.answerChoice_5[1];
        var z = questionFive.answerChoice_5[2];
        var a = questionFive.answerChoice_5[3];
        //console.log(x);
        document.getElementById("answer17").innerHTML = x.toString();
        document.getElementById("answer18").innerHTML = y.toString();
        document.getElementById("answer19").innerHTML = z.toString();
        document.getElementById("answer20").innerHTML = a.toString();
        
        //document.getElementById("ansOne").innerHTML += x.toString();
        //document.getElementsByTagName("inlineRadio1"). innerHTML += item;
        
        }
        displayAnswer_Choice5();


//when answer is selected
var rightAnswer_score = 0;
var wrongAnswer_score = 0;
// answer buttons for question 1/////
/*var x = questionOne.answerChoice;
 
// var y = questionOne.answerChoice[1];
// var z = questionOne.answerChoice[2];
// var a = questionOne.answerChoice[3];
$("#answer1").click(function(){

var b = questionOne.rightAnswer;

for( var i = 0; i < questionOne.answerChoice.length; i++){
        if(i < b){
            rightAnswer_score++;
            console.log(rightAnswer_score);
        }
}



})*/

    
//check if the answers selected is the right answers from the QuestionArray
// if all the answers are correct
    // stop the timer
    // alert the player they have won
    // show outcome
// if the answers are all wrong 
    //stop the timer
    // alert the player they have lost 
    //show outcome
// if the answers is 7/10 right 
    // stop timer 
    //alert the player they still won
    //show outcome
})








   



















/*
var questionSix = {
    question:"What does the crocodile swallow in Peter Pan?",
    answerChoice:["A Clock","Peter Pan","Hook","A Pot"],
    rightAnswer: 0,
    
};
var questionSeven = {
    question:"Angela Lansbury plays a witch called Miss Eglantine Price in which Disney movie?",
    answerChoice:["Clocks and Watches","Bedsticks and Doorknobs"," Witches and Doors","Bedknobs and Broomsticks"],
    rightAnswer: 3,
    
};
var questionEight = {
    question: "In the movie Dumbo, what type of animal were Dandy Fat Glasses Preacher and Straw Hat?",
    answerChoice:["Crows","Pigs","Ants","Monkeys"],
    rightAnswer: 0,
    shown: false,
}
var questionNine = {
    question: " What does Cinderella's fairy godmother turn into a carriage?",
    answerChoice:["Pumpkin","Watermelon","Apples","Bananas"],
    rightAnswer: 0,
    shown: false,
}
var questionTen = {
    question: " Which was the first full-length animated movie to be released by Disney?",
    answerChoice:["Beauty and the Beast","Aladin","Snow White and the Seven Dewarfs","Snow White"],
    rightAnswer: 2,
    shown: false,
}
*/
