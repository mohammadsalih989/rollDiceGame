"use strict";

// html varibles
// player 1
const player1 = document.querySelector(".player-1");
const player1Name = document.querySelector(".player-1__name");
const player1HoldPoint = document.querySelector(".player-1__holdPoint--value");
const player1CurrentPoint = document.querySelector(
  ".player-1__currentPoint--value"
);

// player 2
const player2 = document.querySelector(".player-2");
const player2Name = document.querySelector(".player-2__name");
const player2HoldPoint = document.querySelector(".player-2__holdPoint--value");
const player2CurrentPoint = document.querySelector(
  ".player-2__currentPoint--value"
);

// general
const dice = document.querySelector(".dice");
const newGameBtn = document.querySelector(".newGameBtn");
const rollDiceBtn = document.querySelector(".rollDiceBtn");
const holdBtn = document.querySelector(".holdBtn");

// js varibles
// player 1
let player1HoldPointValue = 0;
let player1CurrentPointValue = 0;

// player 2
let player2HoldPointValue = 0;
let player2CurrentPointValue = 0;

// js functions

// event listner functions

// roll btn function
const rollDiceEvent = function () {
  dice.className = "dice";

  let rollDiceFunction = Math.ceil(Math.random() * 6);

  if (rollDiceFunction == 1) {
    dice.classList.add("one");
  } else if (rollDiceFunction == 2) {
    dice.classList.add("two");
  } else if (rollDiceFunction == 3) {
    dice.classList.add("three");
  } else if (rollDiceFunction == 4) {
    dice.classList.add("four");
  } else if (rollDiceFunction == 5) {
    dice.classList.add("five");
  } else if (rollDiceFunction == 6) {
    dice.classList.add("six");
  }

  if (player1.classList.contains("active")) {
    if (rollDiceFunction !== 1) {
      player1CurrentPointValue += rollDiceFunction;
      player1CurrentPoint.textContent = player1CurrentPointValue;
    } else {
      player1CurrentPointValue = 0;
      player1.classList.remove("active");
      player2.classList.add("active");
      player1CurrentPoint.textContent = player1CurrentPointValue;
    }
  } else {
    if (rollDiceFunction !== 1) {
      player2CurrentPointValue += rollDiceFunction;
      player2CurrentPoint.textContent = player2CurrentPointValue;
    } else {
      player2CurrentPointValue = 0;
      player2.classList.remove("active");
      player1.classList.add("active");
      player2CurrentPoint.textContent = player2CurrentPointValue;
    }
  }
};

// hold btn function
const holdFunction = function () {
  if (player1.classList.contains("active")) {
    player1HoldPointValue += player1CurrentPointValue;
    player1HoldPoint.textContent = player1HoldPointValue;

    player1CurrentPointValue = 0;
    player1CurrentPoint.textContent = player1CurrentPointValue;

    player1.classList.remove("active");
    player2.classList.add("active");
  } else {
    player2HoldPointValue += player2CurrentPointValue;
    player2HoldPoint.textContent = player2HoldPointValue;

    player2CurrentPointValue = 0;
    player2CurrentPoint.textContent = player2CurrentPointValue;

    player2.classList.remove("active");
    player1.classList.add("active");
  }

  // wtin function
  if (player1HoldPointValue >= 100) {
    player1Name.textContent = `player  1 wins`;
    holdBtn.classList.add("dn");
    rollDiceBtn.classList.add("dn");
  } else if (player2HoldPointValue >= 100) {
    player2Name.textContent = `player  2 wins`;
    holdBtn.classList.add("dn");
    rollDiceBtn.classList.add("dn");
  }
};

// new game btn function
const newGame = function () {
  location.reload();
};
// event runer function
function eventRunner() {
  rollDiceBtn.addEventListener("click", rollDiceEvent);
  holdBtn.addEventListener("click", holdFunction);
  newGameBtn.addEventListener("click", newGame);
}
eventRunner();
