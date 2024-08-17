import { addAbout } from "./about-page";
import { addMain } from "./main-page";
import { addMenu } from "./menu-page";
import "./Style.css";
export {container};

function removeAllChilds(parent){
    while (parent.firstChild){
        parent.removeChild(container.lastChild);
    };
}
const container = document.querySelector("#content");
const buttons = {
    home: document.querySelector("#home"),
    menu: document.querySelector("#menu"),
    about: document. querySelector("#about")
};
buttons.home.addEventListener('click', () => {
    removeAllChilds(container);
    addMain();
});

buttons.menu.addEventListener('click', ()=> {
    removeAllChilds(container);
    addMenu();
})

buttons.about.addEventListener('click', () => {
    removeAllChilds(container);
    addAbout();
});

addMain();