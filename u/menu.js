if (location.href.toLowerCase().includes("educationaltools.github.io/more/u")) {
  document.querySelector(".sidebar > .icnbtn.home").remove();
}

function menu(menuName) {
  document.querySelector(".menucontainer").classList.remove("hide");
  document.querySelector(".menucontainer > .menu").innerHTML = "";
  if (menuName == "gmae") {
    header = document.createElement("h1");
    header.innerHTML = "Gmaes";
    document.querySelector(".menucontainer > .menu").appendChild(header);
  }
  if (menuName == "app") {
    header = document.createElement("h1");
    header.innerHTML = "Apps";
    document.querySelector(".menucontainer > .menu").appendChild(header);
  }
  if (menuName == "tool") {
    header = document.createElement("h1");
    header.innerHTML = "Tools";
    document.querySelector(".menucontainer > .menu").appendChild(header);
  }
  if (menuName == "more") {
    header = document.createElement("h1");
    header.innerHTML = "More";
    document.querySelector(".menucontainer > .menu").appendChild(header);
  }
  if (menuName == "new") {
    header = document.createElement("h1");
    header.innerHTML = "Skill";
    document.querySelector(".menucontainer > .menu").appendChild(header);
  }
  //   document.querySelector(".menu").innerHTML = menu[menuName];
}

function closeMenu() {
  document.querySelector(".menucontainer").classList.add("hide");
}
