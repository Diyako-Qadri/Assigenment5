$(() => {
  const navMenu = () => {
    // Hide the main menu initially
    $(".main-menu").hide();

    $("div .hamburger-menu").on("click", (event) => {
      $(".main-menu").toggleClass("active");
      $(".main-menu").slideToggle(); // Toggle visibility
    });

    $(".main-menu > div.with-arrow").on("click", function (event) {
      // Toggle the triggered class
      $(this).toggleClass("triggered");

      // Toggle the display property of the submenu with a slideDown effect
      const submenu = $(this).find(".submenu, .submenu-2, .submenu-3");
      if ($(this).hasClass("triggered")) {
        submenu.slideDown("triggered");
      } else {
        submenu.slideUp("triggered");
      }

      // Hide other submenus
      $(this).siblings().removeClass("triggered").find(".submenu, .submenu-2, .submenu-3").slideUp("triggered");
    });

    $(".submenu > div.with-arrow, .submenu-2 > div.with-arrow").on("click", function (event) {
      // Toggle the triggered class
      $(this).toggleClass("triggered");

      // Toggle the display property of the submenu-3 with a slideDown effect
      const submenu3 = $(this).find(".submenu-3");
      if ($(this).hasClass("triggered")) {
        submenu3.slideDown("triggered");
      } else {
        submenu3.slideUp("triggered");
      }

      // Hide other submenu-3
      $(this).siblings().removeClass("triggered").find(".submenu-3").slideUp("triggered");
    });
  };

  navMenu();
});
