import {container} from "./index.js";
import picture from "./images/patrick-schneider-unsplash.jpg";
import { createImage } from "./menu-page.js";

export function addMain(){
    for (let child of main){
        container.appendChild(child);
    }
};

const main = [
    document.createElement("h1"),
    createImage(picture, ''),
    document.createElement("p")
];

main[0].textContent = "Welcome to Nostalgic Bites";
main[1].className = "mainImg";
main[2].textContent = "Where you get taste of 70s, 80s, and 90s eras. Have a Classic favorites? maybe wanna feel those vintage vibes? Come and find out!";