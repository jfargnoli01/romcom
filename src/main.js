// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', loadRandomImage);
document.addEventListener('load', loadRandomTitle);
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

loadRandomImage();
loadRandomTitle();
