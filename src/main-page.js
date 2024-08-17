import {container} from "./index.js";

export function addMain(){
    for (let child of main){
        container.appendChild(child);
    }
};

const main = [
    document.createElement("h1"),
    document.createElement("img"),
    document.createElement("div"),
    document.createElement("p")
];

main[0].textContent = "Welcome to Nostalgic Bites";
main[2].textContent = "just whatever";
const div = document.createElement("div");