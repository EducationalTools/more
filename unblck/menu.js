function menu(menuName) {
  document.querySelector(".menucontainer").classList.remove("hide");
  document.querySelector(".menucontainer > .menu").innerHTML = "";
  //   document.querySelector(".menu").innerHTML = menu[menuName];
}

function closeMenu() {
  document.querySelector(".menucontainer").classList.add("hide");
}
