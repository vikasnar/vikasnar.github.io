var numberofFaces = 5;
var range = 400;

function generateGame(){
    generateFaces(numberofFaces);
}


function generateFaces(numberofFaces){
    var leftSide = document.getElementById("leftPane");
//    remove all previous faces
    while (leftSide.hasChildNodes()) {
        leftSide.removeChild(leftSide.lastChild);
    }
    for(var i = 0;i<numberofFaces;i++){
        var face = document.createElement("img");
        face.setAttribute("src","http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
        face.style.top = generateRandomNumber(0,range)+"px";
        face.style.left = generateRandomNumber(0,range)+"px";
        leftSide.appendChild(face);
    }
//    Copy all the faces from the leftside node and append it to rightside
    var rightSide = document.getElementById("rightPane");
    while (rightSide.hasChildNodes()) {
        rightSide.removeChild(rightSide.lastChild);
    }
    var faces = leftSide.cloneNode(true);
    faces.removeChild(faces.lastChild);
    rightSide.appendChild(faces);
    leftSide.lastChild.onclick = function() {
        event.stopPropagation();
        numberofFaces += 5;
        generateFaces(numberofFaces);
    };
    document.body.onclick =  function gameOver(){
       alert("Game Over!!");
        leftSide.lastChild.onclick = null;
        document.body.onclick = null;
    };
}

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}