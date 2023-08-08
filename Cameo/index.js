// sidebar open close js code
const sidebar = document.querySelector(".sidebar");
const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");

menuBtn.onclick = function () {
  menuBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
};
closeBtn.onclick = function () {
  sidebar.classList.remove("active");
};

document.onclick = function (e) {
  if (!menuBtn.contains(e.target) && !sidebar.contains(e.target)) {
    menuBtn.classList.remove("active");
    sidebar.classList.remove("active");
  }
};

//cards
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 950;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 100;
  });
});
//onmouseover video play
// const clip = document.querySelectorAll(".clip");
// for (let i = 0; i < clip.length; i++) {
//   clip[i].addEventListener("mouseenter", function (e) {
//     clip[i].play();
//   });
//   clip[i].addEventListener("mouseout", function (e) {
//     clip[i].pause();
//   });
// }
