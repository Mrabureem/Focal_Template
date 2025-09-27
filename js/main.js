const skillsSection = document.querySelector(".my-skills .skills");
const skillsFillBar = document.querySelectorAll(".skill .fill-bar");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 500) {
    skillsFillBar.forEach((skill) => (skill.style.width = skill.dataset.skill));
  }
};
