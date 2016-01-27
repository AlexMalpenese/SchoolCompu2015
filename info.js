var lego = document.getElementById("lego");
var surprisedpuppy = document.getElementById("surprisedpuppy");
var cutePuppy = document.getElementById("cutePuppy");
var tiredPuppy = document.getElementById("tiredPuppy");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

lego.addEventListener("click", function(){
    info1.innerHTML = "This picture is about lego";
    info2.innerHTML = "The blue version is a blueprint";
    info3.innerHTML = "Then the transition to the green box adds styling";
    info4.innerHTML = "The green box lego man is completed";
});
                       
surprisedpuppy.addEventListener("click", function(){
    info1.innerHTML = "This is an image of a puppy and a toy";
    info2.innerHTML = "The puppy seems to be very supprised about the toy";
    info3.innerHTML = "The toy is an orange dog";
    info4.innerHTML = "The puppy is very cute";
});

cutePuppy.addEventListener("click", function(){
    info1.innerHTML = "This is a picture of a puppy";
    info2.innerHTML = "The puppy is white and brown";
    info3.innerHTML = "The dog is most likely outside on the deck";
    info4.innerHTML = "THe puppy is very cute";
});

tiredPuppy.addEventListener("click", function(){
    info1.innerHTML = "This is a picture of a puppy";
    info2.innerHTML = "The puppy is on a hardwood floor inside";
    info3.innerHTML = "The puppy is tired";
    info4.innerHTML = "The puppy is cute";
});