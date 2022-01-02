const contactPage = (parentDiv) => {
  const header = document.createElement("h1");
  const headerText = document.createTextNode("Contact Us");
  header.appendChild(headerText);
  parentDiv.appendChild(header);
};

export { contactPage };
