// main elements
const flame = document.querySelector(".flame");
const highlight = document.querySelector(".highlight");
const candle = document.querySelector(".candle-ctn");

// wishes
const wishOne = document.querySelector(".wish-1");
const wishTwo = document.querySelector(".wish-2");
const wishThree = document.querySelector(".wish-3");
const wishFour = document.querySelector(".wish-4");
const wishFive = document.querySelector(".wish-photo-1-container");
const wishSix = document.querySelector(".wish-photo-2");
const wishSeven = document.querySelector(".wish-photo-3");
const lastTitle = document.querySelector(".wish-photo-3-title");

// audio
const audio = new Audio("audio/happy-birthday.mp3");
let playedAlready = false;

candle.addEventListener("click", () => {
  flame.remove();
  highlight.remove();
  if (!playedAlready) {
    audio.play();
    playedAlready = true;
  }
  wishOne.classList.add("wish-her");
  wishTwo.classList.add("wish-her");
  wishThree.classList.add("wish-her");
  wishFour.classList.add("wish-her");
  wishFive.classList.add("wish-her");
  wishSix.classList.add("wish-her");
  wishSeven.classList.add("wish-her-final");
  lastTitle.classList.add("wish-her-final");
});
