import { homepage } from "./homepage";
import { menu } from "./menu";
import { contactPage } from "./contact-page";
import { navbar } from "./navbar";

const clearContent = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const serveSite = () => {
  const contentDiv = document.querySelector("div#content");
  contentDiv.appendChild(navbar());
  const pageDiv = document.createElement("div");
  pageDiv.setAttribute("id", "pageContent");
  contentDiv.appendChild(pageDiv);
  homepage(pageDiv);

  const homeButton = document.querySelector("#button_home");
  const menuButton = document.querySelector("#button_menu");
  const contactUsButton = document.querySelector("#button_contact_us");

  homeButton.addEventListener("click", () => {
    clearContent(pageDiv);
    homepage(pageDiv);
  });
  menuButton.addEventListener("click", () => {
    clearContent(pageDiv);
    menu(pageDiv);
  });
  contactUsButton.addEventListener("click", () => {
    clearContent(pageDiv);
    contactPage(pageDiv);
  });
};

serveSite();
