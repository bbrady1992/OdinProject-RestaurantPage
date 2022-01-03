import "./style/menu.css";

const addMenuItem = (parentNode, itemName, itemDescription) => {
  const menuItem = document.createElement("li");
  const itemText = document.createTextNode(`${itemName} - ${itemDescription}`);

  menuItem.appendChild(itemText);
  parentNode.appendChild(menuItem);
};

const menu = (parentDiv) => {
  const header = document.createElement("h1");
  const headerText = document.createTextNode("Menu");
  header.appendChild(headerText);
  parentDiv.appendChild(header);

  const menuList = document.createElement("ol");
  menuList.className = "menuList";
  parentDiv.appendChild(menuList);

  addMenuItem(
    menuList,
    "Classic Lox",
    "Bagel with shmear, lox, onion, tomato, and capers"
  );

  addMenuItem(
    menuList,
    "Classic Shmear",
    "Toasted bagel with your choice of house-made shmear"
  );

  addMenuItem(menuList, "Banh Mi", "Pork belly, carrots, slaw");

  addMenuItem(
    menuList,
    "Sausage, Egg, and Cheese",
    "Farm-fresh sausage, fried or scrambled egg, and slice of pepperjack cheese"
  );

  addMenuItem(
    menuList,
    "BLT",
    "Thick-cut bacon, lettuce, tomato. Avocado available as $2 add-on"
  );

  addMenuItem(
    menuList,
    "Ham and Cheese",
    "Deli-cut honey or smoked ham with melted swiss cheese"
  );
};

export { menu };
