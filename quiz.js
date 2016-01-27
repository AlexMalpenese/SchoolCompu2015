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
var ChosenCatagory = 0;
var Points = 0;
var questionNum = 1;


startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    differentCategory.style.display = "";
    BlackButler.style.display = "";
    DoctorWho.style.display = "none";
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
    else if (ChosenCatagory == 2) {
        topic.style.display = "";
        topic.innerHTML = "Doctor Who";
        Q1.style.display = "";
        Q1.innerHTML = "Who is the 10th Doctor's companion?";
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
        topic.style.display = "";
        topic.innerHTML = "Black Butler";
        Q1.innerHTML = "What animal does Sebastian like?";
        A1.innerHTML = "1. Dogs";
        A2.innerHTML = "2. Cats";
        A3.innerHTML = "3. Snakes";
        A4.innerHTML = "4. Turtles";
    }
}

CA1.addEventListener("click", function() {
    if (questionNum == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }
    if (questionNum == 2) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
    }
});

CA2.addEventListener("click", function() {
    if (questionNum == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }
    if (questionNum == 2) {
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
    }
});

CA3.addEventListener("click", function() {
    if (questionNum == 1) {
        Points++;
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }
    if (questionNum == 2) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
    }
});

CA4.addEventListener("click", function() {
    if (questionNum == 1) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
        Question2();
    }
    if (questionNum == 2) {
        PointDisplay.style.display = "";
        PointDisplay.innerHTML = Points;
        questionNum++;
    }
});
