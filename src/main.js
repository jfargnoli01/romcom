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
var createNewBookButton = document.querySelector('.create-new-book-button');

var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');

var mainCover = document.querySelector('.main-cover');
var miniCover = document.querySelector('.mini-cover');

var savedCoversSection = document.querySelector(".saved-covers-section");

var userCoverValue = document.querySelector(".user-cover");
var userTitleValue = document.querySelector(".user-title");
var userDesc1Value = document.querySelector(".user-desc1");
var userDesc2Value = document.querySelector(".user-desc2");

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
saveCoverButton.addEventListener('click', addToSavedCovers);
viewSavedButton.addEventListener('click', changeToSavedPostersView);
homeButton.addEventListener('click', changeToHomeView);
createNewBookButton.addEventListener('click', storeAndChangeHome);

savedCoversSection.addEventListener('dblclick', deleteCover);

// Create your event handlers and other functions here 👇

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
};

function createCover() {
  currentCover = new Cover(coverImage.src, coverTitle.innerText, coverTagline1.innerText, coverTagline2.innerText);
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

  viewSavedButton.disabled = false;
};

function changeToSavedPostersView() {
  formView.classList.add("hidden");
  homeView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  savedView.classList.remove("hidden");
  homeButton.classList.remove("hidden");

  viewSavedButton.disabled = true;
};

function changeToHomeView() {
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
  homeButton.classList.add("hidden");
  homeView.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");

  viewSavedButton.disabled = false;
};

function displaySavedCovers() {
  savedCoversSection.innerHTML = "";
  for(var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <section class="mini-cover">
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
      </section>
    `; 
  }
};

function storeNewBookInput() {
  covers.push(userCoverValue.value);
  titles.push(userTitleValue.value);
  descriptors.push(userDesc1Value.value, userDesc2Value.value);

  coverImage.src = userCoverValue.value;
  coverTitle.innerText = userTitleValue.value;
  coverTagline1.innerText = userDesc1Value.value;
  coverTagline2.innerText = userDesc2Value.value;
};

function storeAndChangeHome(event) {
  event.preventDefault();

  storeNewBookInput();
  changeToHomeView();
};

function addToSavedCovers() {
  var displayedCover = new Cover(coverImage.src, coverTitle.innerText, coverTagline1.innerText, coverTagline2.innerText);

  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].cover === displayedCover.cover && savedCovers[i].title === displayedCover.title && savedCovers[i].tagline1 === displayedCover.tagline1 && savedCovers[i].tagline2 === displayedCover.tagline2) {
      return;
    }
  }

  savedCovers.push(displayedCover);
  displaySavedCovers();
};

function deleteCover(event) {
  for(var i = 0; i < savedCovers.length; i++) {
    if(savedCovers[i].cover === event.target.closest(".mini-cover").children[0].src && savedCovers[i].title === event.target.closest(".mini-cover").children[1].innerText) {
      savedCovers.splice(i, 1);
    }
  };
  displaySavedCovers();
};
