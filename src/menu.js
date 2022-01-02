const menu = (parentDiv) => {
  const header = document.createElement("h1");
  const headerText = document.createTextNode("Menu");
  header.appendChild(headerText);
  parentDiv.appendChild(header);
};

export { menu };
