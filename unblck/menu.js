function menu(menuName) {
  document.querySelector(".menucontainer").classList.remove("hide");
  document.querySelector(".menucontainer > .menu").innerHTML = "";
  if (menuName == "gmae") {
    header = document.createElement("h1");
    header.innerHTML = "Gmaes";
    document.querySelector(".menucontainer > .menu").appendChild(header);
  }
  //   document.querySelector(".menu").innerHTML = menu[menuName];
}

function closeMenu() {
  document.querySelector(".menucontainer").classList.add("hide");
}
