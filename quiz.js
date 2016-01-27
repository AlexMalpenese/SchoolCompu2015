// JS file
var startButton = document.getElementById("startButton");
var differentCategory = document.getElementById("differentCatagory");
var BlackButler = document.getElementById("BlackButler");
var DoctorWho = document.getElementById("DoctorWho");
var Fullmetal = document.getElementById("Fullmetal");
var Blue = document.getElementById("Blue");
var DGray = document.getElementById("DGray");
var Q1 = document.getElementById("Q1");
var topic = document.getElementById("topic");
var A1 = document.getElementById("A1");
var CA1 = document.getElementById("CA1");
var A2 = document.getElementById("A2");
var CA2 = document.getElementById("CA2");
var A3 = document.getElementById("A3");
var CA3 = document.getElementById("CA3");
var A4 = document.getElementById("A4");
var CA4 = document.getElementById("CA4");
var PointDisplay = document.getElementById("PointDisplay");
var Ends = document.getElementById("Ends");
var TotalPoints = document.getElementById("TotalPoints");
var NumQuestions = document.getElementById("NumQuestions");
var Break = document.getElementById("Break");
var restart = document.getElementById("restart");
var ChosenCatagory = 0;
var Points = 0;
var questionNum = 1;

function start(){
    Ends.style.display = "none";
    PointDisplay.style.display = "none";
    Q1.style.display = "none";
    topic.style.display = "none";
    TotalPoints.style.display = "none";
    Break.style.display = "none";
    NumQuestions.style.display = "none";
    startButton.style.display = "";
    restart.style.display = "none";
    questionNum = 1;
    Points = 0;
    ChosenCatagory = 0;
}
startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    differentCategory.style.display = "";
    BlackButler.style.display = "";
    DoctorWho.style.display = "";
    Fullmetal.style.display = "none";
    Blue.style.display = "none";
    DGray.style.display = "none";
});

BlackButler.addEventListener("click", function() {
    BlackButler.style.display = "none";
    differentCategory.style.display = "none";
    DoctorWho.style.display = "none";
    Fullmetal.style.display = "none";
    Blue.style.display = "none";
    DGray.style.display = "none";
    ChosenCatagory = 1;
    questions();
});

DoctorWho.addEventListener("click", function() {
    BlackButler.style.display = "none";
    differentCategory.style.display = "none";
    DoctorWho.style.display = "none";
    Fullmetal.style.display = "none";
    Blue.style.display = "none";
    DGray.style.display = "none";
    ChosenCatagory = 2;
    questions();
});

Fullmetal.addEventListener("click", function() {
    BlackButler.style.display = "none";
    differentCategory.style.display = "none";
    DoctorWho.style.display = "none";
    Fullmetal.style.display = "none";
    Blue.style.display = "none";
    DGray.style.display = "none";
    ChosenCatagory = 3;
    questions();
});

Blue.addEventListener("click", function() {
    BlackButler.style.display = "none";
    differentCategory.style.display = "none";
    DoctorWho.style.display = "none";
    Fullmetal.style.display = "none";
    Blue.style.display = "none";
    DGray.style.display = "none";
    ChosenCatagory = 4;
    questions();
});

DGray.addEventListener("click", function() {
    BlackButler.style.display = "none";
    differentCategory.style.display = "none";
    DoctorWho.style.display = "none";
    Fullmetal.style.display = "none";
    Blue.style.display = "none";
    DGray.style.display = "none";
    ChosenCatagory = 5;
    questions2();
});


function questions() {
    if (ChosenCatagory == 1 && questionNum == 1) {
        topic.style.display = "";
        topic.innerHTML = "Black Butler";
        Q1.style.display = "";
        Q1.innerHTML = "Who is the main character?";
        A1.style.display = "";
        A1.innerHTML = "1. Grell Sutcliff";
        CA1.style.display = "";
        A2.style.display = "";
        A2.innerHTML = "2. Sebastian Michaelis";
        CA2.style.display = "";
        A3.style.display = "";
        A3.innerHTML = "3. Ciel Phantomhive";
        CA3.style.display = "";
        A4.style.display = "";
        A4.innerHTML = "4. Prince Soma";
        CA4.style.display = "";
    }
    else if (ChosenCatagory == 2 && questionNum == 1) {
        topic.style.display = "";
        topic.innerHTML = "Doctor Who";
        Q1.style.display = "";
        Q1.innerHTML = "Who is the 12th Doctor's companion??";
        A1.style.display = "";
        A1.innerHTML = "1. Clara Oswald";
        CA1.style.display = "";
        A2.style.display = "";
        A2.innerHTML = "2. Martha Jones";
        CA2.style.display = "";
        A3.style.display = "";
        A3.innerHTML = "3. Rose Tyler";
        CA3.style.display = "";
        A4.style.display = "";
        A4.innerHTML = "4. Captain Jack Harkness";
        CA4.style.display = "";
    }
    else if (ChosenCatagory == 3) {
        topic.style.display = "";
        topic.innerHTML = "Fullmetal Alchemist";
        Q1.style.display = "";
        Q1.innerHTML = "Which brother lost his whole body?";
    }
    else if (ChosenCatagory == 4) {
        topic.style.display = "";
        topic.innerHTML = "Blue Exorcist";
        Q1.style.display = "";
        Q1.innerHTML = "Which brother gained more powers from their father?";
    }
    else if (ChosenCatagory == 5) {
        topic.style.display = "";
        topic.innerHTML = "D. Gray Man";
        Q1.style.display = "";
        Q1.innerHTML = "Who did Allen Walker turn into an akuma?";
    }
}

function Question2() {
    if (ChosenCatagory == 1 && questionNum == 2) {
        Q1.innerHTML = "What animal does Sebastian like?";
        A1.innerHTML = "1. Dogs";
        A2.innerHTML = "2. Cats";
        A3.innerHTML = "3. Snakes";
        A4.innerHTML = "4. Turtles";
    }else if (ChosenCatagory == 2 && questionNum == 2){
        Q1.innerHTML = "If you are in a room with a Weeping Angle, when will it move?";
        A1.innerHTML = "1. When you look at them";
        A2.innerHTML = "2. When you cannot see them";
        A3.innerHTML = "3. When you make noise";
        A4.innerHTML = "4. When you move";
    }
}

function Question3(){
    if(ChosenCatagory == 1 && questionNum == 3){
        Q1.innerHTML = "Who is Ciel's fiance?";
        A1.innerHTML = "1. Madam Red";
        A2.innerHTML = "2. Mey-rin";
        A3.innerHTML = "3. Grell Sutcliff";
        A4.innerHTML = "4. Elizabeth";
    }else if(ChosenCatagory == 2 && questionNum ==3){
        Q1.innerHTML = "Who is Bad Wolf";
        A1.innerHTML = "1. Captain Jack Harkness";
        A2.innerHTML = "2. The Doctor";
        A3.innerHTML = "3. The Face of Boa";
        A4.innerHTML = "4. Rose Tyler";
    }
}
function Question4(){
    if(ChosenCatagory == 1 && questionNum == 4){
        Q1.innerHTML = "What does the Undertaker demand in return for information?";
        A1.innerHTML = "1. Laughter";
        A2.innerHTML = "2. Money";
        A3.innerHTML = "3. Work";
        A4.innerHTML = "4. Information";
    }else if (ChosenCatagory == 2 && questionNum == 4){
        Q1.innerHTML = "Who is the Face of Boa";
        A1.innerHTML = "1. Captain Jack Harkness";
        A2.innerHTML = "2. Micky";
        A3.innerHTML = "3. Riversong";
        A4.innerHTML = "4. Rose Tyler";
    }
}    
function Question5(){
    if(ChosenCatagory == 1 && questionNum == 5){
        Q1.innerHTML = "Why does Grell Sutcliff team up with Madam Red?";
        A1.innerHTML = "1. They are both reapers";
        A2.innerHTML = "2. They both kill for the same reason";
        A3.innerHTML = "3. They like the same color";
        A4.innerHTML = "4. They are in love with each other";
    }
    if(ChosenCatagory == 2 && questionNum == 5){
        Q1.innerHTML = "Who made Captain Jack Harkness immortal?";
        A1.innerHTML = "1. Riversong";
        A2.innerHTML = "2. Madame Vastra";
        A3.innerHTML = "3. Rose Tyler";
        A4.innerHTML = "4. The Doctor";
    }
}
CA1.addEventListener("click", function() {
    if (questionNum == 1 && ChosenCatagory == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if (questionNum == 2 && ChosenCatagory == 1) {
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question3();
    }else if (questionNum == 3 && ChosenCatagory == 1){
        questionNum++;
        Question4();
    }else if (questionNum == 4 && ChosenCatagory == 1){
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question5();
    }else if (questionNum == 5 && ChosenCatagory == 1){
        End();
    }
    
    if (questionNum == 1 && ChosenCatagory == 2){
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if (questionNum == 2 && ChosenCatagory == 2){
        questionNum++;
        Question3();
    }else if(questionNum == 3 && ChosenCatagory == 2){
        questionNum++;
        Question4();
    }else if(questionNum == 4 && ChosenCatagory == 2){
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question5();
    }else if (questionNum == 5 && ChosenCatagory == 2){
        End();
    }
});

CA2.addEventListener("click", function() {
    console.log(questionNum);
    if (questionNum == 1 && ChosenCatagory == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if (questionNum == 2 && ChosenCatagory == 1) {
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question3();
    }else if (questionNum == 3 && ChosenCatagory == 1){
        questionNum++;
        Question4();
    }else if (questionNum == 4 && ChosenCatagory == 1){
        questionNum++;
        Question5();
    }else if (questionNum == 5 && ChosenCatagory == 1){
        End();
    }
    
    if(questionNum == 1 && ChosenCatagory == 2){
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if(questionNum == 2 && ChosenCatagory == 2){
        Points++;
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question3();
    }else if (questionNum == 3 && ChosenCatagory == 2){
        questionNum++;
        Question4();
    }else if(questionNum == 4 && ChosenCatagory == 2){
        questionNum++;
        Question5();
    }else if(questionNum == 5 && ChosenCatagory == 2){
        End();
    }
});

CA3.addEventListener("click", function() {
    if (questionNum == 1 && ChosenCatagory == 1) {
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if (questionNum == 2 && ChosenCatagory == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question3();
    }else if (questionNum == 3 && ChosenCatagory == 1){
        questionNum++;
        Question4();
    }else if(questionNum == 4 && ChosenCatagory == 1){
        questionNum++;
        Question5();
    }else if (questionNum == 5 && ChosenCatagory == 1){
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        End();
    }
    
    if(questionNum == 1 && ChosenCatagory == 2){
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if(questionNum == 2 && ChosenCatagory == 2){
        questionNum++;
        Question3();
    }else if (questionNum == 3 && ChosenCatagory == 2){
        questionNum++;
        Question4();
    }else if (questionNum == 4 && ChosenCatagory == 2){
        questionNum++;
        Question5();
    }else if(questionNum == 5 && ChosenCatagory == 2){
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        End();
    }
});

CA4.addEventListener("click", function() {
    if (questionNum == 1 && ChosenCatagory == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if (questionNum == 2 && ChosenCatagory == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question3();
    }else if (questionNum == 3 && ChosenCatagory == 1){
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question4();
    }else if (questionNum == 4 && ChosenCatagory == 1){
        questionNum++;
        Question5();
    }else if (questionNum == 5 && ChosenCatagory == 1){
        End();
    }
    
    if(questionNum == 1 && ChosenCatagory == 2){
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }else if(questionNum == 2 && ChosenCatagory == 2){
        questionNum++;
        Question3();
    }else if(questionNum == 3 && ChosenCatagory == 2){
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question4();
    }else if(questionNum == 4 && ChosenCatagory == 2){
        questionNum++;
        Question5();
    }else if(questionNum == 5 && ChosenCatagory == 2){
        End();
    }
});
function End(){
    A1.style.display = "none";
    A2.style.display = "none";
    A3.style.display = "none";
    A4.style.display = "none";
    CA1.style.display = "none";
    CA2.style.display = "none";
    CA3.style.display = "none";
    CA4.style.display = "none";
    Ends.style.display = "";
    PointDisplay.style.display = "none";
    Q1.style.display = "none";
    topic.style.display = "none";
    TotalPoints.style.display = "";
    Break.style.display = "";
    NumQuestions.style.display = "";
    Ends.innerHTML = "Great Job! You got:";
    TotalPoints.innerHTML = Points;
    Break.innerHTML = "Out of:";
    NumQuestions.innerHTML= questionNum;
    restart.style.display = "";
}
restart.addEventListener("click", start);


