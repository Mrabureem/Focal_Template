const heroArr = ["graphic design", "web design", "online marketing & seo"];
const heroTitle = document.querySelector(".hero-title");
const bolits = document.querySelectorAll(".bolits span");
let currentTitleIndex = 0;
const currentTitle = heroArr[currentTitleIndex].split("");

changeHeroText();

setInterval(() => {
  changeHeroText();
}, 3000);

const navIcon = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".nav-links");

navIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function removeActive() {
  bolits.forEach((bolt) => {
    bolt.classList.remove("active");
  });
}

function changeHeroText() {
  heroTitle.textContent = "";
  heroTitle.textContent = heroArr[currentTitleIndex];
  removeActive();
  bolits[currentTitleIndex].classList.add("active");
  currentTitleIndex++;
  if (currentTitleIndex == heroArr.length) {
    currentTitleIndex = 0;
  }
}
