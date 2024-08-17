import { container } from "./index";
import img1 from "./images/chicken-wrap.jpg";
import img2 from "./images/Stuffed-peppers.jpg";
import img3 from "./images/brooke-lark-unsplash.jpg";
export function addMenu(){
    container.appendChild(menu.title);
    container.appendChild(menu.dishes);
}
const menu = {
    title : document.createElement("h1"),
    dishes: document.createElement("div"),
}
menu.title.textContent = "OUR FINEST DISHES";
menu.dishes.classList = "menu";


const imgSource = [img1, img2, img3]
const dishImages = imgSource.map(src => createImage(src,"dish", ''));
const textDesc = ["blah blah","bla","blah"];
const dishDesc = textDesc.map(textContent => createText(textContent, "description"));
for (let i = 0; i < dishImages.length; i++){
    menu.dishes.appendChild(dishImages[i])
    menu.dishes.appendChild(dishDesc[i])
};


export function createImage(src, className, alt = ''){
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = className;
    return img;
};

function createText(textContent, className){
    const text = document.createElement("p");
    text.textContent = textContent;
    text.className = className;
    return text;
};