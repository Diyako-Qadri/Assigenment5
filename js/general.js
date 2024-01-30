$(() => {
  $(".main-menu").hide();

  $(".hamburger-menu").on("click", () => {
    $(".main-menu").toggleClass("active");
    $(".main-menu").slideToggle();
  });

  $(".with-arrow").on("click", function () {
    $(this).toggleClass("active");
    $(this).children(".submenu, .submenu-2, .submenu-3").addClass("active");

    // Activate parent with-arrow elements and their ancestors
    $(this).parents(".with-arrow").addClass("active");

    // Deactivate nested submenus in other with-arrow elements
    $(this).siblings(".with-arrow").find(".submenu, .submenu-2, .submenu-3").removeClass("active");
  });
});
