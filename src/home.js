export default function loadHome() {
  const content = document.getElementById("content");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const headline = document.createElement("h1");
  headline.textContent = "Best Pizza in Town";

  const desc = document.createElement("p");
  desc.textContent = "Welcome to our amazing restaurant! Handmade pizzas since 1980.";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(desc);

  content.appendChild(homeDiv);
}