$(() => {
  const navMenu = () => {
    $(".main-menu").hide();

    $("div .hamburger-menu").on("click", (event) => {
      $(".main-menu").toggleClass("active");
      $(".main-menu").slideToggle();
    });

    $(".main-menu").on("click", ".with-arrow[data-submenu]", function (event) {
      const $clickedWithArrow = $(this);
      const $submenu = $clickedWithArrow.find(".submenu, .submenu-2, .submenu-3");

      // Remove active class from other submenus
      $(".submenu, .submenu-2, .submenu-3").not($submenu).removeClass("active");

      // Toggle the class to control visibility
      $clickedWithArrow.toggleClass("active");
      $submenu.toggleClass("active");
    });
  };

  navMenu();
});
