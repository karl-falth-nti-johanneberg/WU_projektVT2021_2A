// const menuButton = document.querySelector(".menuButton")
const menuList = document.querySelector(".menuList")
const menuIcon = document.querySelector(".menuIcon")
const menuNav = document.querySelector(".menuNav")
// function toggleMenu(){
//     if (menuButton.style.display == "none") {
//         menuButton.style.display = "initial";}
//     if (menuList.style.display == "none") {
//         menuList.style.display = "initial";}

//     setTimeout(function(){
//         menuButton.classList.toggle("menuInvisible")
//         menuList.classList.toggle("menuInvisible")
//         // menuButton.classList.toggle("menuButton")
//         // menuIcon.classList.toggle("menuInVisible")
//         menuButton.addEventListener("transitionend", function displayNone(){
//             if(menuButton.classList == "menuInvisible"){
//                 menuButton.style.display = "none"}
//             if(menuList.classList == "menuList menuInvisible"){
//                 menuList.style.display = "none"}})
//     }, 1)
// }

menuIcon.addEventListener("click",function toggleMenu(){
    menuList.classList.toggle("menuToggle")
    menuIcon.classList.toggle("toggleMenu")
})
window.addEventListener("scroll", function scrollCheck(){
    if(window.pageYOffset > 0) {
        menuNav.classList.add("scrolled")
    }
    else {
        menuNav.classList.remove("scrolled")
    }
})