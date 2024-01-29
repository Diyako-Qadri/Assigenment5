$(() => {
  function Student(
    name,
    lastname,
    title,
    location,
    fulltime,
    about,
    experience,
    portfolio
  ) {
    (this.name = name),
      (this.lastname = lastname),
      (this.title = title),
      (this.location = location),
      (this.fulltime = fulltime),
      (this.about = about),
      (this.experience = experience),
      (this.portfolio = portfolio);
  }

  let Sofia = new Student(
    'Sofia',
    'Andermyr',
    'App Developer',
    'Stockholm',
    true,
    "My interest for web design started in 2010 after I specialised in graphic design at high school. I created a few amateur websites to experiment and broaden my knowledge in web design. After working in fast food, and travelling through Europe and Asia, I decided to pursue my interest by studying Interaction Design at university.After completing my bachelor's degree and working as a UI/UX designer, I began to show a keen eye for coding, therefore decided to combine my two favourite interests, design and programming.",
    'During this internship I was given more responsibility in projects which involved direct communication with clients, working together in a team with people in different roles and coding challenging designs'
  );

  let Hicke = new Student(
    'Hicke',
    'Bärk',
    'Front End Developer',
    'Stockholm',
    false,
    "I've always liked web design in some form since childhood, but I didn't start pursuing an education of it until 2011 when I chose a graphic design course in high school. I coded a few rudimentory websites to get some experience in web design. After working in service, I decided to pursue Web Design and started studying Interaction Design at university. After finishing my studies with a bachelor's degree and working as a UI/UX designer, I started to get more and more used to coding and its many challenges, and thus felt that this truly can be the career I was meant for.",
    'During this internship I was given more responsibility in projects which involved direct communication with clients, working together in a team with people in different roles and coding challenging designs'
  );
  let Domnick = new Student(
    'Domnick',
    'Brûlée',
    'Front End Developer',
    'Paris',
    true,
    'Growing up in a household with multiple programmers, I have had an interest in it instilled at a young age. I have been programming as a hobby since high school and made wesites for fun for my friends, with increasingly complexity as time went on. After gratuating, I have been working service jobs before I eventually started studying to become a professional Front-End Developer. I have a mix of good traits learned from both being self taught as well as taught formally.',
    'I know how to work efficiently in solitude and know how to be responsible and outgoing when working with a team.'
  );
  let Santuzza = new Student(
    'Santuzza',
    'Marcello',
    'Front End Developer',
    'Rome',
    true,
    'My interest in programming started just after graduating high school, and I quickly started moving towards learning as much as I could on the subject. After some months of self learning while working part time, I applied for a school in Rome and I made strong strides in learning about HTML, CSS as well as Javacript.',
    'During my internship, I was well-liked by my peers and co-workers, and I gained invaluable experiences working with people on different levels.'
  );
  let Adriano = new Student(
    'Adriano',
    'Montana',
    'Back End Developer',
    'Rome',
    false,
    'After a decade in the restaurant business, I decided to make the switch to programming industry. I began coding in my free time before eventually enrolling in a course in Back-End.',
    'My experience in working restaurant came in handy when learning Back-End, as it can be broken down to problem solving. That experience was appriciated when I was working as an intern, and I was well-liked in that enviorment.'
  );
  let Giacinta = new Student(
    'Giacinta',
    'Offredi',
    'App Developer',
    'Rome',
    true,
    "I never really had an interest in programming, but it came easy and smoothly to me. So I simply kept at it until my skills flourished. I don't hate it, so I could focus on maximizing my efficiency as much as I could. What I do love is learning, and programming has so much to give and learn, so that part keeps me satisifed.",
    'I am constantly curious in every nearly every aspect of new things we learn in programming, so I am good at asking questions and getting good info from my superiors that I can use to further improve. I can be trusted with plenty of responsibility '
  );
  let Romaine = new Student(
    'Romaine',
    'Plourde',
    'App Developer',
    'Paris',
    true,
    'I gained an interest in programming during my high school years, and after graduating, it had become something I wanted to pursue in. I had to put that on hold for about 5 years to take care of my sickly mother, so I studied by myself on the side. After her passing, I wanted to focus on refining everything I know, and enrolled into a course.',
    'I have been described to work really well in supporting other people, and with communicating with clients.'
  );
  let Sigurd = new Student(
    'Sigurd',
    'Wikström',
    'App Developer',
    'Stockholm',
    false,
    'I have always had an fachination with programming, and after spending a lot of years working in marketing, I thought of making the switch to programming. My time studying it have proven to be very fruitful, as I feel I have an understanding of it.',
    'During this internship I was said to be really good at handling clients, and was trusted with the responsibility of being the presenter of the team I worked in.'
  );
  let Astrid = new Student(
    'Astrid',
    'Bärk',
    'Full Stack Developer',
    'Stockholm',
    true,
    'I started focus in on programming when I started in high school, and enrolled in a course soon after graduating. It was difficult at first, but the more I worked on it, the more everything made sense, and programming just clicked with me. I have been studying fulltime and want to work fuiltime solving the problems programming gives me. ',
    'I have a drive in becoming better and better in my chosen field, and have been described as a fast learner. My internship exposed me on what more there is to learn, and I am relishing the challenges this industry will provide me with.'
  );
  let Dimitri = new Student(
    'Dimitri',
    'Giroux',
    'App Developer',
    'Paris',
    true,
    "General work around computers is something I've always been exposed to growing up. My mother worked in repairing computers, which taught me a lot on how they work. My father was a programmer, and taught me a lot about how coding works. Over the course of my childhood, web design is what I enjoyed the most, and thus was the part I spent the most time in learning by myself. By the time I was in in serious education to turn it into a career, I was far ahead of everyone else and made sure to help anyone out teacher did not have time to help.",
    'This taught me how to work as a team and pull every one up to reach my level. This translated well when working at my internship, where I was focused to service and learn from my team and was pulled up to their level'
  );

  let arrayStudentObject = [
    Sofia,
    Hicke,
    Domnick,
    Santuzza,
    Adriano,
    Giacinta,
    Romaine,
    Sigurd,
    Astrid,
    Dimitri,
  ];

  const showStudentInfo = students => {
    const studentContent = $('.student-content').empty();

    students.forEach(student => {
      const profile = $(`
        <div class="profile">
          <img class="student-img" src="./../img/student-profile-img/${student.name}.jpg" alt="">
          <h4>${student.name} ${student.lastname}</h4>
          <p>${student.title}</p>
          <button class="read-more">View Profile</button>
        </div>
      `);

      profile.find('.read-more').on('click', () => {
        const modalContent = $(`
          <div class="modal" id="modal">
            <div class="modal-header">
            <img class="modal-img" src="./../img/student-profile-img/${student.name}.jpg" alt="">
              <div class="title">${student.name} ${student.lastname} 
             </div>
              <button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
            <h3>${student.title}</h3>
              <p>About: ${student.about}</p>
              </br>
              <p>Experince: ${student.experience}</p>
              </br>
              <p>${student.portfolio}</p>
            </div>
          </div>
          <div class="active" id="overlay"></div>
        `);

        modalContent.find('.close-button, #overlay').on('click', () => {
          modalContent.removeClass('active');
          $('#overlay').removeClass('active');
          showStudentInfo(arrayStudentObject);
        });

        studentContent.empty().append(modalContent);
        modalContent.addClass('active');
        $('#overlay').addClass('active');
      });

      studentContent.append(profile);
    });
  };

  showStudentInfo(arrayStudentObject);

  //Filter

  const filterStractur = $('main').prepend(`
  <div class="filter-content">
            <div class="dropdown filter">
                <div class="select">
                    <span class="selected">Location</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li class="reset-btn">All</li>
                    <li class="stockholm">Stockholm</li>
                    <li class="paris">Paris</li>
                    <li class="rome">Rome</li>
                </ul>
            </div>
            <div class="dropdown filter">
                <div class="select">
                    <span class="selected">Role</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li class="reset-btn">All</li>
                    <li class="front-end">Front-End developer</li>
                    <li class="back-end">Back-End Developer</li>
                    <li class="app-dev">App Developer</li>
                    <li class="full-stack">Full Stack Developer</li>
                </ul>
            </div>
            <div class="dropdown filter">
                <div class="select">
                    <span class="selected">Full-/part Time</span>
                    <div class="caret"></div>
                </div>
                <ul class="menu">
                    <li class="reset-btn">All</li>
                    <li class="fulltime-true">Yes</li>
                    <li class="fulltime-false">No</li>
                </ul>
            </div>
        </div>
  `);

  const dropdowns = $('.dropdown');

  dropdowns.each((index, dropdown) => {
    const select = $(dropdown).find('.select');
    const caret = $(dropdown).find('.caret');
    const menu = $(dropdown).find('.menu');
    const options = $(dropdown).find('.menu li');
    const selected = $(dropdown).find('.selected');

    select.on('click', () => {
      menu.toggleClass('menu-open');
      select.toggleClass('select-clicked');
      caret.toggleClass('caret-rotate');
    });

    options.on('click', event => {
      const option = $(event.currentTarget);
      selected.text(option.text());
      select.removeClass('select-clicked');
      caret.removeClass('caret-rotate');
      menu.removeClass('menu-open');

      options.removeClass('active');
      option.addClass('active');
    });
  });

  let filterPlaceholder1= [];
  let filterPlaceholder2= [];
  let filterPlaceholder3= [];
  let multifilterActive= false;
  let filterCounter=0;

  
  
const filterMainFunction = (className, filterCategory, filterSpecificValue) => {//ex .profile , fulltime, true
  $(className).on("click", () => {
    $(".main-content").empty();
    //first time filter
    if (multifilterActive===false) {
      let filteredAnnouncements = arrayStudentObject.filter((student)=> {

        if (student[filterCategory]=== filterSpecificValue) {
          filterPlaceholder1.push(student);
          console.log(filterPlaceholder1);
          return student[filterCategory]=== filterSpecificValue
        }
        multifilterActive=true;
        
        
      })
      filterCounter++;
      console.log(filterCounter)
    showStudentInfo(filteredAnnouncements);
    // filter after 2nd click
    } else if (multifilterActive===true && filterCounter===1) {

      let filteredAnnouncements1 = filterPlaceholder1.filter((student)=> {

        if (student[filterCategory]=== filterSpecificValue) {
          filterPlaceholder2.push(student);
          console.log(filterPlaceholder2);
          return student[filterCategory]=== filterSpecificValue
        }
        multifilterActive=true;
        
      })
      filterCounter++;
        console.log(filterCounter)
      showStudentInfo(filteredAnnouncements1);
      //filter 3rd click
    }  else if (multifilterActive===true && filterCounter===2) {

      let filteredAnnouncements2 = filterPlaceholder1.filter((student)=> {

        if (student[filterCategory]=== filterSpecificValue) {
          filterPlaceholder3.push(student);
          console.log(filterPlaceholder3);
          return student[filterCategory]=== filterSpecificValue
        }
        multifilterActive=true;
        
      })
      filterCounter++;
        console.log(filterCounter)
      showStudentInfo(filteredAnnouncements2);
    }
    
  })
}


  const dropdownsOriginal = $('.dropdown');

  // Function to initialize the original text content by clicking on All(.reset-btn)
  const initOriginalTextContent = () => {
    dropdownsOriginal.each((index, dropdown) => {
      const select = $(dropdown).find('.select');
      select.data('originalText', select.find('.selected').text());
    });
  };

  initOriginalTextContent();

  const resetFilterBtn = $('.reset-btn').on('click', event => {
    showStudentInfo(arrayStudentObject);

    const resetButton = $(event.currentTarget);
    const dropdown = resetButton.closest('.dropdown');
    const select = dropdown.find('.select');

    select.find('.selected').text(select.data('originalText'));
  });

  //fulltime
  filterMainFunction('.fulltime-true', 'fulltime', true);
  filterMainFunction('.fulltime-false', 'fulltime', false);
  // filterMainFunction(".reset-btn", "fulltime", true, false)
  //Roles
  filterMainFunction('.back-end', 'title', 'Back End Developer');
  filterMainFunction('.front-end', 'title', 'Front End Developer');
  filterMainFunction('.app-dev', 'title', 'App Developer');
  filterMainFunction('.full-stack', 'title', 'Full Stack Developer');
  // filterMainFunction(".reset-btn", "title", "Back End Developer","Front End Developer", "App Developer", "Full Stack Developer")
  //Location
  filterMainFunction('.stockholm', 'location', 'Stockholm');
  filterMainFunction('.rome', 'location', 'Rome');
  filterMainFunction('.paris', 'location', 'Paris');
  // filterMainFunction(".reset-btn","location", "Stockholm", "Rome", "Paris")
});
