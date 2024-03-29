$(() => {
  function Company(name, role, location, fulltime, description, responsibilities, requirements, bonus, smallimg, bigimg) {
    this.name = name;
    this.role = role;
    this.location = location;
    this.fulltime = fulltime ? "Yes" : "No";
    this.description = description;
    this.responsibilities = responsibilities;
    this.requirements = requirements;
    this.bonus = bonus;
    this.smallimg = smallimg;
    this.bigimg = bigimg;
  }
  let Company1 = new Company(
    "InnovateTech Solutions",
    "Front End Developer",
    "Stockholm",
    true,
    "InnovateTech Solutions is a dynamic tech company pushing the boundaries of innovation. Join our team to work on cutting-edge projects and make a lasting impact in the world of technology.",
    "As a Senior Software Developer, you will lead the development of complex software solutions, mentor junior developers, and contribute to the overall success of our projects.",
    "Requirements:\n- Master's degree in Computer Science\n- Extensive experience in full-stack development\n- Leadership skills and ability to work in a collaborative environment",
    "Competitive salary, stock options, and professional development opportunities.",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "innovatetech_big.jpg"
  );

  let Company2 = new Company(
    "Digital Dynamics",
    "App Developer",
    "New York",
    false,
    "Digital Dynamics is a creative design studio passionate about user experience and visual aesthetics. Join us to create stunning and user-friendly designs that captivate audiences around the globe.",
    "As a UX/UI Designer, you will be responsible for crafting visually appealing and intuitive user interfaces. Collaborate with cross-functional teams to bring concepts to life.",
    "Requirements:\n- Bachelor's degree in Design or related field\n- Proficiency in design tools like Adobe Creative Suite\n- Strong portfolio showcasing design projects",
    "Competitive salary, health and wellness benefits, and a vibrant work environment.",
    "./../img/companies-logo/Digital Dynamics-logos.jpeg",
    "digitaldynamics_big.jpg"
  );
  let Company3 = new Company(
    "Quantum Innovations",
    "Data Scientist",
    "Stockholm",
    true,
    "Quantum Innovations is at the forefront of data science, leveraging cutting-edge technologies to extract valuable insights. Join our team to work on challenging projects that drive innovation and impact.",
    "As a Data Scientist, you will analyze complex datasets, develop predictive models, and contribute to the development of data-driven solutions.",
    "Requirements:\n- Master's degree in Data Science or related field\n- Proficiency in programming languages like Python or R\n- Strong analytical and problem-solving skills",
    "Competitive salary, flexible work arrangements, and opportunities for professional growth.",
    "./../img/companies-logo/Quantum Innovations-logos.jpeg",
    "quantuminnovations_big.jpg"
  );

  let Company4 = new Company(
    "GreenTech Solutions",
    "Senior Software Developer",
    "Paris",
    true,
    "GreenTech Solutions is committed to sustainable practices and environmental conservation. Join our team to contribute to eco-friendly projects that make a positive impact on the planet.",
    "As an Environmental Engineer, you will design and implement solutions to address environmental challenges. Collaborate with experts in the field to create a greener future.",
    "Requirements:\n- Bachelor's degree in Environmental Engineering\n- Experience with environmental impact assessments\n- Passion for sustainability",
    "Competitive salary, eco-friendly workplace, and opportunities for community engagement.",
    "./../img/companies-logo/GreenTech Solutions-logos.jpeg",
    "greentech_big.jpg"
  );

  let Company5 = new Company(
    "CyberGuard Solutions",
    "Senior Software Developer",
    "Rome",
    true,
    "CyberGuard Solutions is dedicated to safeguarding digital assets and protecting against cyber threats. Join our team to be on the frontline of cybersecurity and make a difference in the digital landscape.",
    "As a Cybersecurity Analyst, you will monitor security systems, analyze threats, and implement measures to ensure the confidentiality and integrity of information.",
    "Requirements:\n- Bachelor's degree in Cybersecurity or related field\n- Knowledge of security frameworks and protocols\n- Analytical mindset and attention to detail",
    "Competitive salary, ongoing training, and a collaborative cybersecurity environment.",
    "./../img/companies-logo/CyberGuard Solutions-logos.jpeg",
    "cyberguard_big.jpg"
  );

  let Company6 = new Company(
    "HealthHub Technologies",
    "UX/UI Designer",
    "Rome",
    true,
    "HealthHub Technologies is revolutionizing healthcare through innovative software solutions. Join our team to develop applications that enhance patient care and streamline medical processes.",
    "As a Healthcare Software Engineer, you will design and implement software for healthcare systems, ensuring reliability and compliance with industry standards.",
    "Requirements:\n- Bachelor's degree in Computer Science or Healthcare Informatics\n- Experience in healthcare software development\n- Knowledge of HIPAA regulations",
    "Competitive salary, health and wellness benefits, and opportunities to contribute to meaningful projects.",
    "./../img/companies-logo/HealthHub Technologies-logos.jpeg",
    "healthhub_big.jpg"
  );

  let Company7 = new Company(
    "SwiftLogistics",
    "Data Scientist",
    "Paris",
    true,
    "SwiftLogistics is a leader in supply chain management, providing efficient solutions to clients worldwide. Join our team to optimize logistics and contribute to the success of global businesses.",
    "As a Supply Chain Analyst, you will analyze data, optimize transportation routes, and implement strategies to enhance the efficiency of supply chain operations.",
    "Requirements:\n- Bachelor's degree in Supply Chain Management or related field\n- Strong analytical and problem-solving skills\n- Knowledge of logistics and transportation systems",
    "Competitive salary, career advancement opportunities, and a collaborative logistics environment.",
    "./../img/companies-logo/SwiftLogistics-logos.jpeg",
    "swiftlogistics_big.jpg"
  );

  let Company8 = new Company(
    "AeroInnovate",
    "Frontend Developer",
    "Stockholm",
    true,
    "AeroInnovate is a pioneer in aerospace engineering, pushing the boundaries of flight and space exploration. Join our team to work on groundbreaking projects and shape the future of aerospace technology.",
    "As an Aerospace Engineer, you will design and test aircraft and spacecraft components, ensuring they meet safety and performance standards.",
    "Requirements:\n- Bachelor's or Master's degree in Aerospace Engineering\n- Experience with CAD software and simulation tools\n- Passion for aerospace innovation",
    "Competitive salary, opportunities for professional development, and a dynamic aerospace engineering environment.",
    "./../img/companies-logo/AeroInnovate-logos.jpeg",
    "aeroinnovate_big.jpg"
  );

  let Company9 = new Company(
    "Mosaic Media Productions",
    "Frontend Developer",
    "Los Angeles",
    false,
    "Mosaic Media Productions is a creative agency specializing in multimedia content creation. Join our team to lead and inspire a talented group of creatives in producing captivating visual experiences.",
    "As a Creative Director, you will oversee the creative process, collaborate with clients, and ensure the delivery of high-quality multimedia projects.",
    "Requirements:\n- Extensive experience in multimedia production\n- Strong leadership and communication skills\n- Creative portfolio showcasing successful projects",
    "Competitive compensation, flexible work hours, and a vibrant creative workspace.",
    "./../img/companies-logo/Mosaic Media Productions-logos.jpeg",
    "mosaicmedia_big.jpg"
  );

  let Company10 = new Company(
    "BlueBios Pharmaceuticals",
    "Data Scientist",
    "Los Angeles",
    true,
    "BlueBios Pharmaceuticals is dedicated to advancing biomedical research and developing innovative solutions for healthcare. Join our team to contribute to groundbreaking discoveries in the field of life sciences.",
    "As a Biomedical Research Scientist, you will conduct experiments, analyze data, and contribute to the development of novel pharmaceutical products.",
    "Requirements:\n- PhD in Biomedical Sciences or related field\n- Strong research background\n- Knowledge of laboratory techniques and procedures",
    "Competitive salary, comprehensive benefits, and opportunities for professional growth.",
    "./../img/companies-logo/BlueBios Pharmaceuticals-logos.jpeg",
    "bluebios_big.jpg"
  );

  let ourCompanies = [Company1, Company2, Company3, Company4, Company5, Company6, Company7, Company8, Company9, Company10];

  const showCompanyInfo = (companies) => {
    const companyContent = $(".company-content").empty();

    companies.forEach((company) => {
      const profile = $(`
      <div class="company-container">
      <img class="company-img" src="${company.smallimg}" alt="${company.name}">
         <div class="company-right-side">
               <div class="company-text">  
               <h3 class="company-title"> ${company.name} </h3> 
               <p class="company-role"> ${company.role} </p>
               <p class="company-location"> Location ${company.location} </p>  
               <p class="company-fulltime"> Full-time: ${company.fulltime} </p> 
              </div> 
            <button class="read-more">Read more</button>
         </div>
      </div>
    `);

      profile.find(".read-more").on("click", () => {
        const modalContent = $(`
        <div class="modal" id="modal">
          <div class="modal-header">
          <img class="company-img" src="${company.smallimg}" alt="${company.name}">
            <div class="title">${company.name} </div>
            <button class="close-button">&times;</button>
          </div>
          <div class="modal-body">
          <h3>${company.role}</h3>
            </br>
            <p class="pop-up-content">Requirements: ${company.requirements}</p>
            </br>
            <p class="pop-up-content">Bonus: ${company.bonus}</p>
          </div>
        </div>
        <div class="active" id="overlay"></div>
      `);

        const closeModal = () => {
          modalContent.removeClass("active");
          $("#overlay").removeClass("active");
          $(document).off("keydown", handleEscKey);
          $(document).off("click", handleOutsideClick);
          // re rendering the array
          showCompanyInfo(ourCompanies);
        };

        const handleEscKey = (event) => {
          if (event.key === "Escape") {
            closeModal();
          }
        };

        const handleOutsideClick = (event) => {
          if ($(event.target).hasClass("active")) {
            closeModal();
          }
        };

        modalContent.find(".close-button, #overlay").on("click", closeModal);

        $(document).on("keydown", handleEscKey);
        $(document).on("click", handleOutsideClick);

        companyContent.empty().append(modalContent);
        modalContent.addClass("active");
        $("#overlay").addClass("active");
      });

      companyContent.append(profile);
    });
  };

  showCompanyInfo(ourCompanies);

  //Filter

  const filterStractur = $("main").prepend(`
    <div class="filter-content">
              <div class="dropdown filter">
                  <div class="select">
                      <span class="selected">Location</span>
                      <div class="caret"></div>
                  </div>
                  <ul class="menu">
                      <li class="reset-btn">All</li>
                      <li class="stockholm" href="#">Stockholm</li>
                      <li class="rome" href="#">Rome</li>
                      <li class="paris" href="#">Paris</li>
                      <li class="new-york" href="#">New York</li>
                      <li class="los-angeles" href="#">Los Angeles</li>
                  </ul>
              </div>
              <div class="dropdown filter">
                  <div class="select">
                      <span class="selected">Role</span>
                      <div class="caret"></div>
                  </div>
                  <ul class="menu">
                      <li class="reset-btn">All</li>
                      <li class="senior-software" href="#">Senior Software Developer</li>
                      <li class="frontend-developer" href="#">Frontend Developer</li>
                      <li class="ux-design" href="#">UX/UI Designer</li>
                      <li class="data-scientist" href="#">Data Scientist</li>
                  </ul>
              </div>
              <div class="dropdown filter">
                  <div class="select">
                      <span class="selected">Full-/part Time</span>
                      <div class="caret"></div>
                  </div>
                  <ul class="menu">
                      <li class="reset-btn">All</li>
                      <li class="fulltime-true" href="#" data-value="Yes">Yes</li>
                      <li class="fulltime-false" href="#" data-value="false">No</li>
                  </ul>
              </div>
          </div>
    `);

  const dropdowns = $(".dropdown");

  dropdowns.each((index, dropdown) => {
    const select = $(dropdown).find(".select");
    const caret = $(dropdown).find(".caret");
    const menu = $(dropdown).find(".menu");
    const options = $(dropdown).find(".menu li");
    const selected = $(dropdown).find(".selected");

    select.on('click', (event) => {
      event.stopPropagation();
      menu.toggleClass('menu-open');
      select.toggleClass('select-clicked');
      caret.toggleClass('caret-rotate');

      dropdowns.not($(dropdown)).find(".menu").removeClass("menu-open");
      dropdowns.not($(dropdown)).find(".select").removeClass("select-clicked");
      dropdowns.not($(dropdown)).find(".caret").removeClass("caret-rotate");
    });

    options.on("click", (event) => {
      const option = $(event.currentTarget);
      selected.text(option.text());
      select.removeClass("select-clicked");
      caret.removeClass("caret-rotate");
      menu.removeClass("menu-open");

      options.removeClass("active");
      option.addClass("active");
    });
  });

  $(document.body).on("click", () => {
    dropdowns.find(".menu").removeClass("menu-open");
    dropdowns.find(".select").removeClass("select-clicked");
    dropdowns.find(".caret").removeClass("caret-rotate");
  });
  

  const filterMainFunction = (
    className,
    filterCategory,
    filterSpecificValue
  ) => {
    
    $(className).on('click', () => {
      $('.company-content').empty();
      let filteredAnnouncements = ourCompanies.filter(company => {
        return company[filterCategory] === filterSpecificValue;
      });
      showCompanyInfo(filteredAnnouncements);
    });
  };

  const dropdownsOriginal = $(".dropdown");

  // Function to initialize the original text content by clicking on All(.reset-btn)
  const initOriginalTextContent = () => {
    dropdownsOriginal.each((index, dropdown) => {
      const select = $(dropdown).find(".select");
      select.data("originalText", select.find(".selected").text());
    });
  };

  initOriginalTextContent();

  const resetFilterBtn = $(".reset-btn").on("click", (event) => {
    showCompanyInfo(ourCompanies);

    const resetButton = $(event.currentTarget);
    const dropdown = resetButton.closest(".dropdown");
    const select = dropdown.find(".select");

    select.find(".selected").text(select.data("originalText"));
  });

  //fulltime
  filterMainFunction(".fulltime-true", "fulltime", "Yes");
  filterMainFunction(".fulltime-false", "fulltime", "No");
  //Roles
  filterMainFunction(".senior-software", "role", "Senior Software Developer");
  filterMainFunction(".frontend-developer", "role", "Frontend Developer");
  filterMainFunction(".ux-design", "role", "UX/UI Designer");
  filterMainFunction(".data-scientist", "role", "Data Scientist");
  //Location
  filterMainFunction(".stockholm", "location", "Stockholm");
  filterMainFunction(".rome", "location", "Rome");
  filterMainFunction(".paris", "location", "Paris");
  filterMainFunction(".los-angeles", "location", "Los Angeles");
  filterMainFunction(".new-york", "location", "New York");
});
