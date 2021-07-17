// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');

var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');

var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');

var mainCover = document.querySelector('.main-cover');
var miniCover = document.querySelector('.mini-cover');

var savedCoversSection = document.querySelector(".saved-covers-section");

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
viewSavedButton.addEventListener('click', changeToSavedPostersView);

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
  homeView.classList.add("hidden");
  savedView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
};
function changeToSavedPostersView() {
  formView.classList.add("hidden");
  homeView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  displaySavedCovers();
};

function displaySavedCovers() {
  // mainCoversavedCovers[i].tagline2.classList.remove("main-cover");
  savedCoversSection.innerHTML = `
  <section class="mini-cover">
  <img src=${savedCovers[0].cover}>
  <h2 class="cover-title">${savedCovers[0].title}</h2>
  <h3 class="tagline">A tale of ${savedCovers[0].tagline1} and ${savedCovers[0].tagline2}</h3>
  </section>
  `;
  // miniCover.style.backgroundImage = `"url('${savedCovers[0].cover}')"`;
};





// savedCovers[i].cover
// savedCovers[i].title
// savedCovers[i].tagline1
// savedCovers[i].tagline2

// Is there a way to make hover behavior static using only JS?
// If so, could be applied to last clicked button - apply to iteration 2
