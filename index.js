
function matchStart() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageSelected1 = "images/dice" + randomNumber1 +".png";
    var imageSelected2 = "images/dice" + randomNumber2 +".png";
    document.querySelector(".img1").setAttribute("src", imageSelected1);
    document.querySelector(".img2").setAttribute("src", imageSelected2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("#header").innerText = "Player 1 is the Winner!";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("#header").innerText = "Game Tied! Try Again.";
    } else {
        document.querySelector("#header").innerText = "Player 2 is the Winner!";
    }
}
