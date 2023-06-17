//   VARIABLES AND CONSTS
let input = document.querySelector(".input")
let word = document.querySelector(".word")
let M_Score = document.querySelector(".score")
let M_time = document.querySelector(".time")
let G_over = document.querySelector(".gameover")
let Correct = document.querySelector(".correct")
let time = 10;
let Score = 0;
let Isplay;


// ARRAY--->>>
let words = [
    "coder",
    "developer",
    "programer",
    "generate",
    "runaway",
    "road",
    "making",
    "cutting",
    "hacker",
    "button",
    "graphical",
    "skills",
    "construction",
    "orange",
    "education",
    "selection",
    "struggle",
    "instructions",
    "tralated",
    "induction",
    "shaheen",
    "carpenter",
    "peshawar",
    "islamabad",
    "karachi",
    "balochistan",
    "players",
    "twentyfifth",
    "birthday",
    "relaxation"
]

// FUNCTION MAKING
function RANDOM() {
    let random = Math.floor(Math.random() * words.length)
    word.textContent = words[random]
}

function TIME_DOWN() {

    if (time > 0) {
        time--;
    } else if (time === 0) {
        Isplay = false
    }
    M_time.innerHTML = time;
}

function ck_status() {
    if (Isplay === false && time === 0) {
        input.value = ""
        input.style.pointerEvents = "none"
        G_over.style.display = "block"
        Score = -1
    }
}

function input_Sensor() {
    if (input.value === word.textContent) {
        Isplay = true;
        time = 11;
        Correct.style.display = "block"
        setTimeout(() => {
            Correct.style.display = "none"
        }, 800);
        Score++;
        RANDOM()
        input.value = ""
    }
    if (Score === -1) {
        Score = 0
    }
    M_Score.textContent = Score;
}

// FUNCTION CALLING
function init() {
    RANDOM()
    setInterval(TIME_DOWN, 1000);
    setInterval(ck_status, 50);
    input.addEventListener("input", input_Sensor)
}
document.querySelector(".input").onfocus = ()=>{
    init()
}
