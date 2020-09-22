let count = 0;
const userchoice = document.getElementById("userchoice");
const aichoice = document.getElementById("aichoice");
const signs = ['rock', 'paper', 'scissors'];
let usign = " ";
let aisign = " ";
let aiscore = 0;
let uscore = 0;
const result = document.getElementById("youwin");
const btn = document.getElementById("btnreset");
let winstreak = 0;
let winmax = 0;


// Pseudo du joueur ------------------------------------------------------
document.getElementById("user").innerText = prompt("What is your pseudo ?", "<Enter your pseudo here>");


// led color : win, lose and equality------------------------------------------------------
//user
function winleduser() {
    if (count == 0) {
        document.getElementById("led_user1").style.backgroundColor = "green";
    }
    else if (count == 1) {
        document.getElementById("led_user2").style.backgroundColor = "green";
    }
    else {
        document.getElementById("led_user3").style.backgroundColor = "green";
    }
}

function loseleduser() {
    if (count == 0) {
        document.getElementById("led_user1").style.backgroundColor = "red";
    }
    else if (count == 1) {
        document.getElementById("led_user2").style.backgroundColor = "red";
    }
    else {
        document.getElementById("led_user3").style.backgroundColor = "red";
    }
}

function equalleduser() {
    if (count == 0) {
        document.getElementById("led_user1").style.backgroundColor = "blue";
    }
    else if (count == 1) {
        document.getElementById("led_user2").style.backgroundColor = "blue";
    }
    else {
        document.getElementById("led_user3").style.backgroundColor = "blue";
    }
}

//ai ------------------------------------------------------
function winledai() {
    if (count == 0) {
        document.getElementById("led_ai1").style.backgroundColor = "green";
    }
    else if (count == 1) {
        document.getElementById("led_ai2").style.backgroundColor = "green";
    }
    else {
        document.getElementById("led_ai3").style.backgroundColor = "green";
    }
}

function loseledai() {
    if (count == 0) {
        document.getElementById("led_ai1").style.backgroundColor = "red";
    }
    else if (count == 1) {
        document.getElementById("led_ai2").style.backgroundColor = "red";
    }
    else {
        document.getElementById("led_ai3").style.backgroundColor = "red";
    }
}

function equalledai() {
    if (count == 0) {
        document.getElementById("led_ai1").style.backgroundColor = "blue";
    }
    else if (count == 1) {
        document.getElementById("led_ai2").style.backgroundColor = "blue";
    }
    else {
        document.getElementById("led_ai3").style.backgroundColor = "blue";
    }
}


// Ai random choice------------------------------------------------------
function ai() {
    var number = Math.floor(Math.random() * 3);
    aisign = signs[number];
    if (aisign == "rock") {
        aichoice.style.background = "no-repeat url(../r_p_s/images/rock.png) center";
    }
    else if (aisign == "paper") {
        aichoice.style.background = "no-repeat url(../r_p_s/images/paper.png) center";
    }
    else {
        aichoice.style.background = "no-repeat url(../r_p_s/images/scissors.png) center";
    }
}


// user choice------------------------------------------------------
function rock() {
    onclick = userchoice.style.background = "no-repeat url(../r_p_s/images/rock.png) center";
    onclick = ai();
    usign = "rock";
    match();
}

function paper() {
    onclick = userchoice.style.background = "no-repeat url(../r_p_s/images/paper.png) center";
    onclick = ai();
    usign = "paper";
    match();
}

function scissors() {
    onclick = userchoice.style.background = "no-repeat url(../r_p_s/images/scissors.png) center";
    onclick = ai();
    usign = "scissors";
    match();
}

// match ; compare usersign and aisign ------------------------------------------------------
function match() {
    document.getElementById("round").innerText = count + 1;
    if ((usign == 'rock' && aisign == 'scissors') || (usign == 'paper' && aisign == 'rock') || (usign == 'scissors' && aisign == 'paper')) {
        uscore = uscore + 1;
        userchoice.style.borderColor = 'green';
        aichoice.style.borderColor = 'red';
        winleduser();
        loseledai();
    }
    else if ((usign == 'scissors' && aisign == 'rock') || (usign == 'rock' && aisign == 'paper') || (usign == 'paper' && aisign == 'scissors')) {
        aiscore = aiscore + 1;
        userchoice.style.borderColor = 'red';
        aichoice.style.borderColor = 'green';
        loseleduser();
        winledai();
    }
    else {
        userchoice.style.borderColor = 'blue';
        aichoice.style.borderColor = 'blue';
        aiscore = aiscore + 1;
        uscore = uscore + 1;
        equalledai();
        equalleduser();
    }
    score();
}

// score final ------------------------------------------------------
function score() {
    count = count + 1;
    if ((uscore > aiscore) && count == 3) {
        result.style.visibility = 'visible';
        result.innerText = "You Win !!";
        btn.style.visibility = 'visible';
        document.getElementById("paper").style.visibility = 'hidden';
        document.getElementById("rock").style.visibility = 'hidden';
        document.getElementById("scissors").style.visibility = 'hidden';
    }
    else if ((uscore == aiscore) && count == 3) {
        result.style.visibility = 'visible';
        result.innerText = "Equality !!";
        btn.style.visibility = 'visible';
        document.getElementById("paper").style.visibility = 'hidden';
        document.getElementById("rock").style.visibility = 'hidden';
        document.getElementById("scissors").style.visibility = 'hidden';
    }

    else if ((uscore < aiscore) && count == 3) {
        result.style.visibility = 'visible';
        result.innerText = "You lose !!";
        btn.style.visibility = 'visible';
        document.getElementById("paper").style.visibility = 'hidden';
        document.getElementById("rock").style.visibility = 'hidden';
        document.getElementById("scissors").style.visibility = 'hidden';
    }
}


// reset score and choice ------------------------------------------------------
function reset() {
    document.getElementById("round").innerText = "1";
    userchoice.style.background = "none";
    aichoice.style.background = "none";
    userchoice.style.borderColor = 'goldenrod';
    aichoice.style.borderColor = 'goldenrod';
    uscore = 0;
    aiscore = 0;
    count = 0;
    result.style.visibility = 'hidden';
    btn.style.visibility = 'hidden';
    document.getElementById("paper").style.visibility = 'visible';
    document.getElementById("rock").style.visibility = 'visible';
    document.getElementById("scissors").style.visibility = 'visible';
    resetled();
}


// reset led ------------------------------------------------------
function resetled() {
    document.getElementById("led_user1").style.backgroundColor = "goldenrod";
    document.getElementById("led_user2").style.backgroundColor = "goldenrod";
    document.getElementById("led_user3").style.backgroundColor = "goldenrod";
    document.getElementById("led_ai1").style.backgroundColor = "goldenrod";
    document.getElementById("led_ai2").style.backgroundColor = "goldenrod";
    document.getElementById("led_ai3").style.backgroundColor = "goldenrod";
}