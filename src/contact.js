export default function loadContact() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");
  contactDiv.className = "contact";

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = `
    📞 <strong>123-456-789</strong><br><br>
    📧 <a href="mailto:info@restaurant.com">info@restaurant.com</a><br><br>
    📍 Lisbon, Portugal
  `;

  contactDiv.appendChild(title);
  contactDiv.appendChild(info);

  content.appendChild(contactDiv);
}