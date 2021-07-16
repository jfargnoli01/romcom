// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline = document.querySelector('.tagline');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', loadRandomImage);
window.addEventListener('load', loadRandomTitle);
window.addEventListener('load', loadRandomTagline1);
window.addEventListener('load', loadRandomTagline2);
randomCoverButton.addEventListener('click', createCover);
//creat an eventlistener 'load', loadRandomCover 
//reuse for 'click'

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
// function loadRandomCover() {
//   loadRandomImage();
//   loadRandomTitle();
//   loadRandomTagline();
// }
//Every time the user clicks the Show New Random Cover button, a new random cover is created ---> var currentCover; (instance)
//create an event listener for the Show New Random Cover Button (click, createCover)


// hint: you may need to update the value of the provided currentCover variable
// hint: use that Cover class!

