let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("game started");

    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userbtnFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randBtn);

  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}
let highScore = 0;

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    if (highScore < level) {
      highScore = level;
    }
    h2.innerText = `Game over! Your Score Was ${level} And the highest Score is ${highScore} Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userbtnFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
