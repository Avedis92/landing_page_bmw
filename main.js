const images = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const selectorButtons = document.querySelectorAll(".selector-button");
const learnMoreWrappers = document.querySelectorAll(".learn-more-wrapper");

let index = 0;
selectorButtons[index].style.background = "#6f6f6f";
learnMoreWrappers[index].style.zIndex = 100;
selectorButtons.forEach((b, i) => {
  b.addEventListener("click", () => {
    selectorButtons[index].style.background = "#d6d6d6";
    delete images[index].dataset.active;
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
  images[previousIndex].dataset.active = true;
  learnMoreWrappers[previousIndex].style.zIndex = 100;
  selectorButtons[previousIndex].style.background = "#6f6f6f";
});
nextButton.addEventListener("click", () => {
  delete images[index].dataset.active;
  selectorButtons[index].style.background = "#d6d6d6";
  learnMoreWrappers[index].style.zIndex = 0;
  let nextIndex = ++index;
  if (nextIndex === images.length) {
    nextIndex = index = 0;
  }
  images[nextIndex].dataset.active = true;
  learnMoreWrappers[nextIndex].style.zIndex = 100;
  selectorButtons[nextIndex].style.background = "#6f6f6f";
});
