$(() => {
  $(document).ready(function () {
    const navMenu = () => {
      let isMenuOpen = false;

      const toggleMenu = () => {
        $(".nav-container").toggleClass("added-padding");
        $("ul.main-menu").slideToggle();
        isMenuOpen = !isMenuOpen;
      };

      $("nav .hamburger-menu").on("click", (event) => {
        toggleMenu();
        event.stopPropagation();
      });

      $("ul.main-menu > li").on("click", function (event) {
        // Toggle the submenu
        $(this).find(".submenu").toggleClass("active").slideToggle();
        $("ul.main-menu > li").not(this).find(".submenu").removeClass("active").slideUp();
        event.stopPropagation();
      });

      $(".submenu > li").on("click", function (event) {
        // Toggle the submenu-2
        $(this).find(".submenu-2").toggleClass("active").slideToggle();
        $(".submenu > li").not(this).find(".submenu-2").removeClass("active");
        event.stopPropagation();
      });

      $(".submenu-2 > li").on("click", function (event) {
        // Toggle the submenu-3
        $(this).find(".submenu-3").toggleClass("active").slideToggle();
        $(".submenu-2 > li").not(this).find(".submenu-3").removeClass("active");
        event.stopPropagation();
      });

      // Handle click on body to close the menu
      $(document).on("click", (event) => {
        if (isMenuOpen && !$(event.target).closest(".nav-container").length) {
          toggleMenu();
        }
      });
    };

    navMenu();
  });
});
