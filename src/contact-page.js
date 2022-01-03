const contactPage = (parentDiv) => {
  const header = document.createElement("h1");
  const headerText = document.createTextNode("Contact Us");
  header.appendChild(headerText);
  parentDiv.appendChild(header);

  const email = document.createElement("p");
  const emailText = document.createTextNode("brothersbagels@bagelme.com");
  email.appendChild(emailText);
  parentDiv.appendChild(email);

  const phone = document.createElement("p");
  const phoneText = document.createTextNode("(540) 555-5971");
  phone.appendChild(phoneText);
  parentDiv.appendChild(phone);
};

export { contactPage };
