export default function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const items = [
    { name: "Pizza Margherita", price: "€12" },
    { name: "Pepperoni Special", price: "€14" },
    { name: "Four Cheese Deluxe", price: "€15" },
    { name: "Garlic Bread", price: "€5" },
  ];

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `${item.name} — <span>${item.price}</span>`;
    menuDiv.appendChild(div);
  });

  content.appendChild(menuDiv);
}