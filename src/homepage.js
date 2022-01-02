const homepage = (parentDiv) => {
  const header = document.createElement("h1");
  const headerText = document.createTextNode("Brady's Bagels");
  header.appendChild(headerText);
  parentDiv.appendChild(header);
};

export { homepage };
