$(document).ready(function () {
  $(window).scroll(function (e) {
    let windowTop = $(this).scrollTop();
    $("nav ul li a").each(function () {
      if (windowTop >= $($(this).attr("href")).offset().top - 400) {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
});

function menuToggle() {
  var menu = document.getElementById("portrait-menu");
  var button = document.getElementById("menu-toggle")
  if (menu.style.display === "block") {
    menu.style.display = "none";
    button.innerHTML = "menu";
  } else {
    menu.style.display = "block";
    button.innerHTML = "close";
  }
}