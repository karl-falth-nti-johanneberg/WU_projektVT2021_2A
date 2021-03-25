const menuButton = document.querySelector(".menuButton")
const menuIcon = document.querySelector(".menuIcon")
function toggleMenu(){
    if (menuButton.style.display == "none") {
        menuButton.style.display = "initial";
    }
        setTimeout(function(){
        menuButton.classList.toggle("menuInVisible")
        menuButton.classList.toggle("menuButton")
        // menuIcon.classList.toggle("menuInVisible")
        menuButton.addEventListener("transitionend", function displayNone(){
            if(menuButton.style.display == "none"){
            menuButton.style.display = "initial";
            }else {
                menuButton.style.display = "none"
            }
        })
    }, 100);
}
[menuButton, menuIcon].forEach(item => {item.addEventListener("click", toggleMenu)})

function headerResizer(){

}
document.addEventListener