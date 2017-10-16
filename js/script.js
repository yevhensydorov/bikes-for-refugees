// Responsive navigation using jQuery//

$("button.toggle-icon").on("click", function() {
  $(".main-nav > .nav-menu").toggleClass("responsive-ul");
  $(".main-nav").toggleClass("responsive-nav-height");
});