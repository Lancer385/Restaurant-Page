import { container } from "./index.js";
export function addAbout(){
    container.appendChild(h1);
    container.appendChild(p);
};

const h1 = document.createElement("h1");
h1.textContent = "ABOUT US"
const p = document.createElement("p");
p.innerHTML = "Welcome to Nostalgic Bites, where we celebrate the best flavors from the 70s, 80s, and 90s.<br>Come join us and experience a taste of the past with every bite!<br>Location: 789 Elm Street, Springfield<br>Hours: Mon-Fri: 11am - 10pm | Sat-Sun: 10am - 11pm<br>Contact: (555) 987-6543"