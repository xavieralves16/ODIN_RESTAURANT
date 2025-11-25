export default function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const item = document.createElement("p");
  item.textContent = "Pizza Margherita — €12";

  menuDiv.appendChild(title);
  menuDiv.appendChild(item);

  content.appendChild(menuDiv);
}