import { navbar } from "./navbar.js";

const insertMainHeader = ()=>{
     const header = document.getElementById("header");
     header.innerHTML = navbar();
}

export {insertMainHeader};