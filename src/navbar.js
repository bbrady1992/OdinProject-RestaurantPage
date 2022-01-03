import "./style/navbar-style.css";

const navbar = () => {
  const createNavbarButton = (navbar, id, text) => {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    const buttonText = document.createTextNode(text);
    button.appendChild(buttonText);
    navbar.appendChild(button);
  };

  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  createNavbarButton(navbar, "button_home", "Home");
  createNavbarButton(navbar, "button_menu", "Menu");
  createNavbarButton(navbar, "button_contact_us", "Contact Us");

  return navbar;
};

export { navbar };
