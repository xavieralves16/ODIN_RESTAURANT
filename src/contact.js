export default function loadContact() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 123-456-789";

  contactDiv.appendChild(title);
  contactDiv.appendChild(phone);

  content.appendChild(contactDiv);
}