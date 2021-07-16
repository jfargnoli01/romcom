// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', loadRandomCover);
randomCoverButton.addEventListener('click', loadRandomCover);
randomCoverButton.addEventListener('click', createCover);
makeNewButton.addEventListener('click', changeToFormView);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
function loadRandomImage() {
  var coversIndex = getRandomIndex(covers);
  coverImage.src = covers[coversIndex];
};
function loadRandomTitle() {
  var titlesIndex = getRandomIndex(titles);
  coverTitle.innerText = titles[titlesIndex];
};
function loadRandomTagline1() {
  var taglineIndex1 = getRandomIndex(descriptors);
  coverTagline1.innerText = descriptors[taglineIndex1];
};
function loadRandomTagline2() {
  var taglineIndex2 = getRandomIndex(descriptors);
  coverTagline2.innerText = descriptors[taglineIndex2];
}
function createCover() {
  currentCover = new Cover(coverImage.src, coverTitle.innerText, coverTagline1.innerText, coverTagline2.innerText);
  console.log(currentCover, "Current Cover");
};
function loadRandomCover() {
  loadRandomImage();
  loadRandomTitle();
  loadRandomTagline1();
  loadRandomTagline2();
};
function changeToFormView() {
  formView.classList.remove("hidden");
};
