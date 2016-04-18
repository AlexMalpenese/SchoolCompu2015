//javascript
var why = document.getElementById("why");
var words = document.getElementById("words");
var reason = document.getElementById("reason");
var noise = document.getElementById("noise");
var audio = new Audio("audio_file.mp3");

why.addEventListener("click",function() {
    why.style.display = "none";
    words.style.display = "none";
    reason.style.display = "";
    noise.style.display = "";
});

noise.addEventListener("click",function(){
    audio.play(); 
});