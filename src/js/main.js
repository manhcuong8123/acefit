window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navMid = document.querySelector(".nav-mid");
  const itemNav = document.querySelectorAll(".a");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navMid.style.backgroundColor = "#fff";
    navMid.style.zIndex ="4"
    navMid.style.top = "0";
    navMid.style.boxShadow = "0 5px 10px rgba(0,0,0,.2)";
    itemNav.forEach((item) => {
      item.style.color = "#18305c";
    });
  } else {
    navMid.style.background = "transparent";
    navMid.style.top = "34px";
    itemNav.forEach((item) => {
      item.style.color = "#fff";
    });
    navMid.style.boxShadow = "none";
  }
}
var mobile = document.querySelector(".btn-menuSub i");
var menuMobile = document.querySelector(".right-navbar");
var main = document.querySelector(".main");
mobile.addEventListener("click", () => {
  menuMobile.classList.toggle("acctive-menu");
});

var close = document
  .querySelector(".close-menu i")
  .addEventListener("click", function () {
  menuMobile.classList.toggle("acctive-menu");
  });
