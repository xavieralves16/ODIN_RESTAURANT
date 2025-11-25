import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function clearContent() {
  const content = document.getElementById("content");
  content.textContent = "";
}

function addNavEvents() {
  document.getElementById("homeBtn").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.getElementById("menuBtn").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.getElementById("contactBtn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

function init() {
  addNavEvents();
  loadHome();
}

init();