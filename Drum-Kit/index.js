var drumCount= document.querySelectorAll(".drum").length;
for(var i=0;i<drumCount;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}
document.addEventListener("keypress",function(event){
    Sound(event.key);
    buttonAnimation(event.key);
});
function handleClick(){
    //this.style.color="purple";
    var buttonINNERHTML = this.innerHTML;
    Sound(buttonINNERHTML);
    buttonAnimation(buttonINNERHTML);
}
function Sound(key){
    switch (key) {
        case "w":
            var crash = new Audio('Sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('Sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('Sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('Sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
                var tom2 = new Audio('Sounds/tom-2.mp3');
                tom2.play();
                break;
        case "k":
            var tom3 = new Audio('Sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('Sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log("Error");
    }

}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.style.color="purple";
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    //activeButton.style.setProperty('color', 'initial')

}
// document.addEventListener("keypress", function(event){
//     console.log(event);
// });