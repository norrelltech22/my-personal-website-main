const div = document.getElementsByClassName("main");
const h2 = document.getElementById("contact-info");
const emaildiv = document.getElementsByClassName("email");
const a = document.getElementById("emailaddr");

h2.textContent = "Contact Me :";

function mainTo() {    
    a.href = "mailto: norrelltech2022@gmail.com";
}

a.addEventListener("click", mainTo);