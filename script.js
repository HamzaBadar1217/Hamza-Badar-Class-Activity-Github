const timer = document.querySelector(".timeLeft");
const firstRow = document.querySelector(".first-row");

const cardheader = document.querySelector("#card-header");
const profileImg = document.querySelector("#card-img-top");
const titlename = document.querySelector("#card-title");
const subtitlename = document.querySelector("#card-sub-title");
const bio = document.querySelector("#card-text");
const url = document.querySelector("#profile-url");
const btn = document.querySelector("#btn");

const cardshadowheader = document.querySelector(".card-shadow-header");
const profileshadowImg = document.querySelector(".card-img-shadow-top");
const titleshadowname = document.querySelector(".card-shadow-title");
const subtitleshadowname = document.querySelector(".card-sub-shadow-title");
const shadowbio = document.querySelector(".card-shadow-text");
const shadowurl = document.querySelector(".profile-shadow-url");
const shadowbtn = document.querySelector(".shadow-btn");

setTimeout(() => {
  fetch("https://api.github.com/users/HamzaBadar1217")
    .then((res) => res.json())
    .then((data) => {
      cardheader.style.cssText = `
      background-image: url(./Images/mean-stack.png);
      background-size: cover;
      `;
      profileImg.src = data.avatar_url;
      titlename.innerText = data.name;
      bio.innerText = data.bio;
      url.innerHTML = data.blog;
      url.href = `https://www.${data.blog}`;
      subtitlename.innerText = "Mean-Stack Developer";

      cardshadowheader.style.cssText = `
      background-image: url(./Images/mean-stack.png);
      background-size: contain;
      `;
      profileshadowImg.src = data.avatar_url;
      titleshadowname.innerText = data.name;
      shadowbio.innerText = data.bio;
      shadowurl.innerHTML = data.blog;
      shadowurl.href = `https://www.${data.blog}`;
      subtitleshadowname.innerText = "Mean-Stack Developer";
    });
}, 10000);

const githubAccount = () => {
  window.open(
    "https://github.com/HamzaBadar1217",
    "Github",
    "width=500, height=500"
  );
};

let timerValue = 10;
let opacityValue = 1;

let timeInterval = setInterval(() => {
  timerValue -= 1;
  timer.innerText = timerValue;

  if(timerValue <= 0){
    clearInterval(timeInterval);
    let opacityInterval = setInterval(() => {
        opacityValue -= 0.1;
        firstRow.style.opacity = opacityValue;

        if(opacityValue <= 0){
            clearInterval(opacityInterval);
            firstRow.style.display = 'none';
        }
    }, 250);
  }
}, 1000);
