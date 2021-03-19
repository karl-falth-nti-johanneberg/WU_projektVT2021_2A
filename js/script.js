const menuButton = document.querySelector(".menuButton")
const menuIcon = document.querySelector(".menuIcon")
function toggleMenu(){
    menuButton.classList.toggle("menuVisible")
    // menuIcon.classList.toggle("menuVisible")
}
menuButton.addEventListener("click", toggleMenu)
menuIcon.addEventListener("click", toggleMenu)