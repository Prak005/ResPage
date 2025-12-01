function setMenu() {
    const contentMenu = document.querySelector("#content");
    const menu = document.createElement("div");
    const drinks = document.createElement("div");
    const pastries = document.createElement("div");
    const brunch = document.createElement("div");
    const desserts = document.createElement("div");

    const drinksList = document.createElement("ul");
    const pastriesList = document.createElement("ul");
    const brunchList = document.createElement("ul");
    const dessertsList = document.createElement("ul");

    menu.textContent = "Menu";
    drinks.textContent = "Drinks";
    pastries.textContent = "Pastries";
    brunch.textContent = "Brunch";
    desserts.textContent = "Desserts";

    drinks.appendChild(drinksList);
    pastries.appendChild(pastriesList);
    brunch.appendChild(brunchList);
    desserts.appendChild(dessertsList);

    contentMenu.append(menu, drinks, pastries, brunch, desserts);
    
    const add = (list, text) => {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    };
    
    add(drinksList, "Hazelnut Latte");
    add(drinksList, "Classic Cappuccino");
    add(drinksList, "Iced Vanilla Cold Brew");
    add(drinksList, "Mocha Frappe");
    add(drinksList, "Herbal Mint Tea");

    add(pastriesList, "Butter Croissant");
    add(pastriesList, "Chocolate Chunk Cookie");
    add(pastriesList, "Almond Brioche");
    add(pastriesList, "Blueberry Muffin");

    add(brunchList, "Avacoado Toast with Poach Eggs");
    add(brunchList, "Garlic Herb Pasta Bowl");
    add(brunchList, "Classic Veg Sandwich");
    add(brunchList, "Tomato Basil Soup");

    add(dessertsList, "Caramel Pudding");
    add(dessertsList, "Mini Cheesecake Slice");
}
export{setMenu}