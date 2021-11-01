let firsMove = null;
let gameOver = true;
let fırstCard= 0;
const indexs = [0, 1, 2];
const astronaut = "image/astronaut.jfif";
const moon = "image/moon.jfif";
const back = "image/back.jfif";

function newGame(){
    firsMove=null;
    gameOver=false;
    fırstCard= Math.floor(Math.random() * 3);
    firstMessage();
    backImage(0);
    backImage(1);
    backImage(2);

}

function selectedCard(index){
    if(gameOver || index === firsMove){
        return;
    }
    if(fırstCard === index){
        showCard1(index);
        endGame(true);
    }
    else{
        if(!firsMove){
            firsMove = index;
            showCard2(index);
        }else{
            endGame(false);
        }
    }
}
function showCard1(index){
    const img = document.getElementById("img"+index);
    img.src = astronaut;
    img.style.cursor = "default";
}
function showCard2(index){
    const img = document.getElementById("img"+index);
    img.src = moon;
    img.style.cursor = "default";
}
function endGame(win){
    gameOver=true;
    for(let i=0; i<indexs.length; i++){
        if(i === fırstCard){
            showCard1(i);
        }
        else{
            showCard2(i);
        }
    }
    if(win){
        winShow();
    }else{
        loseShow();
    }
}
function winShow(){
    allHide();
    document.getElementById("winId").style.display="block";
}
function loseShow(){
    allHide();
    document.getElementById("loseId").style.display="block";
}
function firstMessage(){
    allHide();
    document.getElementById("firstId").style.display="block";
}
function allHide(){
    document.getElementById("firstId").style.display="none";
    document.getElementById("winId").style.display="none";
    document.getElementById("loseId").style.display="none";
}
function backImage(index) {
    const img = document.getElementById("img"+index);
    img.src = back;
    img.style.cursor = "pointer";
}