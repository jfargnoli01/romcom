// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline = document.querySelector('.tagline');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', loadRandomImage);
document.addEventListener('load', loadRandomTitle);
document.addEventListener('load', loadRandomTagline);
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
function loadRandomTagline() {
  var taglineIndex1 = getRandomIndex(descriptors);
  var taglineIndex2 = getRandomIndex(descriptors);
  coverTagline.innerText = `A tale of ${descriptors[taglineIndex1]} and ${descriptors[taglineIndex2]}`;
}

loadRandomImage();
loadRandomTitle();
loadRandomTagline();