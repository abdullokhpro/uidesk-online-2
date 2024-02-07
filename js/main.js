let navBar = document.getElementById ("nav-buttons__menu");
let navList = document.getElementById ("nav__list");
let backtop = document.getElementById ("backtop");

let navshrink = document.getElementById ("navshrink")

window.addEventListener("scroll", function() {
    showBacktop();
    showNavShrink();
})

navBar.addEventListener("click", function() {
    navList.classList.toggle("show-nav__list")
})

function showBacktop(){
    if (scrollY>200){
        backtop.classList.add("show-backtop")
    }

    else {
        backtop.classList.remove("show-backtop")
    }
} 

function showNavShrink(){
    if (scrollY>0){
        navshrink.classList.add("show-navshrink")
    }

    else {
        navshrink.classList.remove("show-navshrink")
    }
} 

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});