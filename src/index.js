import { swtichTab } from "./main-page";
import "./Style.css";
const container = document.querySelector("#content");
export {container}
swtichTab();
const home = document.querySelector("#home");
home.addEventListener('click', () => {
    removeAllChilds(container);
});

function removeAllChilds(parent){
    while (parent.firstChild){
        parent.removeChild(container.lastChild);
    };
};