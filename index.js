const sideBarBoton = document.querySelector(".sidebar-toggle");
const aside = document.querySelector(".sidebar");
const closeBoton = document.querySelector(".close-btn");

sideBarBoton.onclick = () => {
    aside.classList.toggle("show-sidebar")
}
closeBoton.onclick = () => {
    aside.classList.toggle("show-sidebar")
}