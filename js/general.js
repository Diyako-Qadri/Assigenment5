$(() => {
  const navMenu = () => {
    $("nav .hamburger-menu").on("click", (event) => {
      $(event.target).next(".main-menu").slideToggle();
    });

    $(".main-menu > p.with-arrow").on({
      mouseenter: (event) => $(event.target).toggleClass("active"),
      mouseleave: (event) => $(event.target).toggleClass("active"),
      click: (event) => {
        $(event.target).find(".submenu").slideToggle("active");
        $(event.target).siblings().find(".submenu").hide("active");
      },
    });

    // Hamburger 2nd level
    $(".submenu > p.with-arrow").on("click", (event) => {
      $(event.target).find(".submenu-2").slideToggle("active");
      $(event.target).siblings().find(".submenu-2").hide("active");
    });

    // Hamburger 3rd level
    $(".submenu-2 > p.with-arrow").on("click", (event) => {
      $(event.target).find(".submenu-3").slideToggle("active");
      $(event.target).siblings().find(".submenu-3").hide("active");
    });

    $("nav .hamburger-menu").on("click", () => {
      $(".nav-container").toggleClass("added-padding");
    });
  };

  navMenu();
});
