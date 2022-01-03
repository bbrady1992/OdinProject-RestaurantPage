import { homepage } from "./homepage";
import { menu } from "./menu";
import { contactPage } from "./contact-page";
import { navbar } from "./navbar";

import "./style/index.css";

const clearContent = (node) => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

const serveSite = () => {
  const contentDiv = document.querySelector("div#content");
  contentDiv.appendChild(navbar());

  const pageDivContainer = document.createElement("div");
  pageDivContainer.classList.add("container");

  const pageDiv = document.createElement("div");
  pageDiv.setAttribute("id", "pageContent");
  pageDiv.classList.add("pageDiv");
  pageDivContainer.appendChild(pageDiv);
  contentDiv.appendChild(pageDivContainer);

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

  homepage(pageDiv);
};

serveSite();
