export function CreateMenu(){
    const menu = document.createElement("div");
    const titleMenu = document.createElement("h3");
    const listContainer = document.createElement("ul");
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    const listItem3 = document.createElement("li");
    const listItem4 = document.createElement("li");
    const listItem5 = document.createElement("li");
    const listItem6 = document.createElement("li");

    menu.classList.add("menu");
    titleMenu.textContent = "Menu of the day";
    
    const items = [
        "Classic Beef Taco 4.5$",
        "Spicy Chicken Wrap 6$",
        "Veggie Delight Taco 7$",
        "Smoky BBQ Burger 10$",
        "Grilled Halloumi Sandwich",
        "Pulled Pork Sliders"
    ];

    items.forEach(itemText =>{
        const itemlist = document.createElement('li');
        itemlist.textContent = itemText;
        listContainer.appendChild(itemlist);
    });

    menu.appendChild(titleMenu);
    menu.appendChild(listContainer);

    return menu

}