$(() => {
  const navMenu = () => {
    $(".main-menu").hide();

    $("div .hamburger-menu").on("click", (event) => {
      $(".main-menu").toggleClass("active");
      $(".main-menu").slideToggle();
    });

    $(".main-menu").on("click", ".with-arrow[data-submenu]", function (event) {
      const $clickedWithArrow = $(this);
      $clickedWithArrow.toggleClass("active");
      const $submenu = $clickedWithArrow.find(".submenu, .submenu-2, .submenu-3");
      $submenu.slideToggle();

      // Close other submenus
      $(".with-arrow[data-submenu]").not($clickedWithArrow).removeClass("active").find(".submenu, .submenu-2, .submenu-3").slideUp();

      // If it's a submenu-2, ensure that the submenu-2 is visible
      if ($clickedWithArrow.hasClass("submenu-2")) {
        $clickedWithArrow.closest(".submenu-2").slideDown();
      }
    });
  };

  navMenu();
});
