// QUERY SELECTORS
// Cover elements
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
// Buttons
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var createNewBookButton = document.querySelector('.create-new-book-button');
// Pages
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
// Saved covers div
var savedCoversSection = document.querySelector(".saved-covers-section");
// Custom cover input fields
var userCoverValue = document.querySelector(".user-cover");
var userTitleValue = document.querySelector(".user-title");
var userDesc1Value = document.querySelector(".user-desc1");
var userDesc2Value = document.querySelector(".user-desc2");

// Cover objects
var savedCovers = [];
var currentCover;

// EVENT LISTENERS
// Page load
window.addEventListener('load', loadRandomCover);
// Buttons
randomCoverButton.addEventListener('click', loadRandomCover);
makeNewButton.addEventListener('click', changeToFormView);
saveCoverButton.addEventListener('click', addToSavedCovers);
viewSavedButton.addEventListener('click', changeToSavedPostersView);
homeButton.addEventListener('click', changeToHomeView);
createNewBookButton.addEventListener('click', storeAndChangeHome);
// Delete cover
savedCoversSection.addEventListener('dblclick', deleteCover);

// EVENT HANDLERS -- Index >> Array >> DOM
// Generate random number to use for indexing
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// Grab random picture from stock image array and put it in the main page img element
// function loadRandomImage() {
// Grab random string from stock titles array and put it in the main page h2 element
// function loadRandomTitle() {
// Grab random string from stock descriptors array and put it in the first span element within the h3 element
// Grab random string from stock descriptors array and put it in the second span element within the h3 element
// Run all random index >>> DOM functions

function loadRandomCover() {
  var coversIndex = getRandomIndex(covers);
  var titlesIndex = getRandomIndex(titles);
  var taglineIndex1 = getRandomIndex(descriptors);
  var taglineIndex2 = getRandomIndex(descriptors);

  currentCover = new Cover(covers[coversIndex], titles[titlesIndex], descriptors[taglineIndex1], descriptors[taglineIndex2]);

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverTagline1.innerText = currentCover.tagline1;
  coverTagline2.innerText = currentCover.tagline2;
}
// VIEW CHANGE
// Show only custom input page, re-enable view saved button
function changeToFormView() {
  hide(homeView);
  hide(savedView);
  hide(randomCoverButton);
  hide(saveCoverButton);

  show(formView);
  show(homeButton);

  viewSavedButton.disabled = false;
};
// Show only saved covers page, disable view saved button
function changeToSavedPostersView() {
  hide(formView);
  hide(homeView);
  hide(randomCoverButton);
  hide(saveCoverButton);

  show(savedView);
  show(homeButton);

  viewSavedButton.disabled = true;
};
// Show only main page, re-enable view saved button
function changeToHomeView() {
  hide(formView);
  hide(savedView);
  hide(homeButton);

  show(homeView);
  show(randomCoverButton);
  show(saveCoverButton);

  viewSavedButton.disabled = false;
};
// Wipe content of mini covers div,
// then iterate thru saved covers array and push it to the mini covers div
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
// Add user inputted fields to their respective stock arrays,
// then also reassign main page DOM elements to use user inputted fields
function storeNewBookInput() {

  covers.push(userCoverValue.value);
  titles.push(userTitleValue.value);
  descriptors.push(userDesc1Value.value, userDesc2Value.value);

  currentCover = new Cover(userCoverValue.value, userTitleValue.value, userDesc1Value.value, userDesc2Value);

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverTagline1.innerText = currentCover.tagline1;
  coverTagline2.innerText = currentCover.tagline2;
};
// Run stock array update/reassign main DOM and show home page functions
function storeAndChangeHome(event) {
  event.preventDefault();

  storeNewBookInput();
  changeToHomeView();

  clearForm();
};
// Create instance of Cover class taking arguments from main DOM elements,
// push cover on main page to saved covers array,
// run wipe/replace on saved covers page
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
// Delete double-clicked cover from saved covers array,
// run wipe/replace on saved covers page
function deleteCover(event) {
  for(var i = 0; i < savedCovers.length; i++) {
    if(savedCovers[i].cover === event.target.closest(".mini-cover").children[0].src && savedCovers[i].title === event.target.closest(".mini-cover").children[1].innerText) {
      savedCovers.splice(i, 1);
    }
  };
  displaySavedCovers();
};
// SHOW and HIDE shortcut functions
function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

// CLEAR FIELDS shortcut functions
function clearForm() {
  userCoverValue.value = "";
  userTitleValue.value = "";
  userDesc1Value.value = "";
  userDesc2Value.value = "";
}
