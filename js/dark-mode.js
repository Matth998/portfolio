let darkMode = document.querySelector("#active-dark-mode");
let imgName = document.querySelector("#icon-lamp");
let logo = document.querySelector("#logo-dark-mode");

darkMode.onclick = function () {

  if (imgName.src.includes("off")) {
    imgName.src = "img/lamp-on.png";
  } else {
    imgName.src = "img/lamp-off.png";
  }

};