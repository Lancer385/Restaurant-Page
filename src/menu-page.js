import { container } from "./index";
export function addMenu(){
    for (const child of menu){
        container.appendChild(child);
    }
}
const menu = [
    document.createElement("h1"),
    document.createElement("div"),
]
const images = [
    document.createElement("img"),
    document.createElement("img"),
    document.createElement("img"),
    document.createElement("img")
];

menu[0].textContent = "OUR FINEST DISHES"
for (let img of images){
    menu[1].appendChild(img)
}