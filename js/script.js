const menuList = document.querySelector(".menuList")
const menuIcon = document.querySelector(".menuIcon")
const menuNav = document.querySelector(".menuNav")

menuIcon.addEventListener("click",
	function toggleMenu(){
		menuList.classList.toggle("menuToggle")
		menuIcon.classList.toggle("toggleMenu")
	}
)
window.addEventListener("scroll",
	function scrollCheck(){
		if(window.pageYOffset > 0) {
			menuNav.classList.add("scrolled")
    		}
    		else {
        			menuNav.classList.remove("scrolled")
    		}
	}
)