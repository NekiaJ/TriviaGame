// External Java/jQuery file 
// Triva Game
// GW Coding Boot Camp
// June 2019

$(document).ready(function () {

 
// Array of objects. contains questions and answers    
var QuestionArray = [
    {
        question: "Which Disney character started life as Steamboat Willie?",
        answerChoice: [ "Mickey Mouse","Roger Rabbit","Donald Duck","Willy Wonka"],
        rightAnswer: 0,
       

 },
 
//  questionTwo  
 {
     question: "In The Jungle Book who teaches Mowgli about The Bare Necesseties of life?",
     answerChoice:["Kaloo","Baloo","Babar","Kaa" ],
     rightAnswer: 1,
    
 },
 
  {
     question: "Cruella de Vil is the villain in which Disney movie?",
     answerChoice:["answer one","anser two","101 Dalmatians","answer three"],
     rightAnswer: 2,
     
 },


 {
    question:"Which Disney princess has a raccoon as a sidekick?",
    answerChoice:["answer one","Pocahontas","answer three","answer three"],
    rightAnswer: 1,
    
},

{
    question:"What is the name of Bambi's rabbit friend?",
    answerChoice:["Bumper","Hunter","Thomas","Thumper"],
    rightAnswer: 3,
    

}];

// start button should disapear after being clicked
// questions and answer options should appear to dom
// timer begins to count down

var count = 0;
function displayQuestion()
{
    count++
   var test= document.getElementById("question").innerHTML = QuestionArray[count].question;
   console.log(test);

}
displayQuestion()

//when answer is selected
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





// //Buttons

//     $("#startBtn").click(function(){
//        // alert(" test");
       
//             $("#startBtn").hide();
//             //startTimer();
    
//     });

//     $(".answ0").click(function(){
//         alert("test answer 1");
//     });

//     $(".answ1").click(function(){
//         alert("test answer 2");
//     });
        
    
//     $(".answ2").click(function(){
//         alert("test answer 3");
//     });

//     $(".answ3").click(function(){
//         alert("test answer 4");
//     });

//     $(".resetBtn").click(function(){

//         alert("test reset");
//     });

//     var countdown;



//         });


   



















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
