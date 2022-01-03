import "./style/homepage-style.css";

const homepage = (parentDiv) => {
  const header = document.createElement("h1");
  const headerText = document.createTextNode("Brother's Bagels");
  header.appendChild(headerText);
  parentDiv.appendChild(header);

  const aboutParagraph = document.createElement("p");
  aboutParagraph.className = "aboutParagraph";
  const aboutParagraphText = document.createTextNode(
    "Brother's Bagels was founded in 2021. We firmly believe that bagels \
    are the best food ever made. We would love to serve you a breakfast \
    bagel sandwich, classic lox bagel, or a twist on old classics, like \
    our banh-mi bagel sandwich, so come on in!"
  );
  aboutParagraph.appendChild(aboutParagraphText);
  parentDiv.append(aboutParagraph);

  const aboutParagraph2 = document.createElement("p");
  aboutParagraph2.className = "aboutParagraph";
  const aboutParagraphText2 = document.createTextNode(
    "Brother's Bagels is run by the brother duo of Bubs and Brubert. \
    Brubert brings his former business experience, while Bubs supplies \
    his delicious bagel recipes that are the heart and soul of Brother's \
    Bagels."
  );
  aboutParagraph2.appendChild(aboutParagraphText2);
  parentDiv.appendChild(aboutParagraph2);
};

export { homepage };
