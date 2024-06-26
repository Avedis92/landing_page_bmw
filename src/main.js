const images = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const selectorButtons = document.querySelectorAll(".selector-button");
const learnMoreWrappers = document.querySelectorAll(".learn-more-wrapper");
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const openMenuButton = document.querySelector(".open-menu-button");
const closeMenuButton = document.querySelector(".close-menu-button");
const menu = document.querySelector(".menu-wrapper--collapsed");
const carouselCounterPreviousButton = document.querySelector(
  ".carousel-counter-previous-button"
);
const carouselCounterNextButton = document.querySelector(
  ".carousel-counter-next-button"
);
const carouselCount = document.querySelector(".carousel-count");
let index = 0;
let timerId;
selectorButtons[index].style.background = "#6f6f6f";
learnMoreWrappers[index].style.zIndex = 100;
pauseButton.style.display = "none";
selectorButtons.forEach((b, i) => {
  b.addEventListener("click", () => {
    delete images[index].dataset.active;
    selectorButtons[index].style.background = "#d6d6d6";
    learnMoreWrappers[index].style.zIndex = 0;
    index = i;
    b.style.background = "#6f6f6f";
    images[i].dataset.active = true;
    learnMoreWrappers[i].style.zIndex = 100;
  });
});
prevButton.addEventListener("click", () => {
  delete images[index].dataset.active;
  selectorButtons[index].style.background = "#d6d6d6";
  learnMoreWrappers[index].style.zIndex = 0;
  let previousIndex = --index;
  if (previousIndex === -1) {
    previousIndex = index = images.length - 1;
  }
  selectorButtons[previousIndex].style.background = "#6f6f6f";
  images[previousIndex].dataset.active = true;
  learnMoreWrappers[previousIndex].style.zIndex = 100;
});
nextButton.addEventListener("click", () => {
  delete images[index].dataset.active;
  selectorButtons[index].style.background = "#d6d6d6";
  learnMoreWrappers[index].style.zIndex = 0;
  let nextIndex = ++index;
  if (nextIndex === images.length) {
    nextIndex = index = 0;
  }
  selectorButtons[nextIndex].style.background = "#6f6f6f";
  images[nextIndex].dataset.active = true;
  learnMoreWrappers[nextIndex].style.zIndex = 100;
});
playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  pauseButton.style.display = "block";
  timerId = setInterval(() => {
    nextButton.click();
  }, 2000);
});
pauseButton.addEventListener("click", () => {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  clearInterval(timerId);
});

carouselCounterPreviousButton.addEventListener("click", () => {
  delete images[index].dataset.active;
  learnMoreWrappers[index].style.zIndex = 0;
  let previousIndex = --index;
  if (previousIndex === -1) {
    previousIndex = index = images.length - 1;
  }
  images[previousIndex].dataset.active = true;
  learnMoreWrappers[previousIndex].style.zIndex = 100;
  carouselCount.innerHTML = `${previousIndex + 1}/3`;
});

carouselCounterNextButton.addEventListener("click", () => {
  delete images[index].dataset.active;
  learnMoreWrappers[index].style.zIndex = 0;
  let nextIndex = ++index;
  if (nextIndex === images.length) {
    nextIndex = index = 0;
  }
  images[nextIndex].dataset.active = true;
  learnMoreWrappers[nextIndex].style.zIndex = 100;
  carouselCount.innerHTML = `${nextIndex + 1}/3`;
});

// open-close menu functionality

const updateMenu = (
  openMenuStyle,
  closeMenuStyle,
  removedMenuClass,
  toggledMenuClass
) => {
  openMenuButton.style.display = openMenuStyle;
  closeMenuButton.style.display = closeMenuStyle;
  menu.classList.remove(removedMenuClass);
  menu.classList.toggle(toggledMenuClass);
};

closeMenuButton.style.display = "none";
closeMenuButton.addEventListener("click", () => {
  updateMenu(
    "inline-block",
    "none",
    "menu-wrapper--expanded",
    "menu-wrapper--collapsed"
  );
});
openMenuButton.addEventListener("click", () => {
  updateMenu(
    "none",
    "inline-block",
    "menu-wrapper--collapsed",
    "menu-wrapper--expanded"
  );
});
