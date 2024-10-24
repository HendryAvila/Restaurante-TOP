import { createContact } from "./contact.js";
import {} from "./home.js"; // Suponiendo que estos archivos existen
import {CreateMenu} from "./menu.js";

import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.getElementById("main-container"); 
    const contactButton = document.getElementById("contact");
    const menuButton = document.getElementById("menu");
    const home = document.querySelector("#home")

    home.addEventListener("click", () =>{
        mainContainer.style.cssText=  " ";
        mainContainer.textContent = '';
    });

    contactButton.addEventListener("click", () => {
        
        mainContainer.textContent = ''; 

        const contacto = createContact();
        mainContainer.appendChild(contacto);
        mainContainer.style.cssText=    " background-color: ##333333c1; backdrop-filter: blur(8px); color: white;";
    });

    menuButton.addEventListener("click", ()=>{
        mainContainer.textContent = "";

        const menu = CreateMenu();
        mainContainer.appendChild(menu);
        mainContainer.style.cssText=    " background-color: ##333333c1; backdrop-filter: blur(8px); color: white;";

    })


});
