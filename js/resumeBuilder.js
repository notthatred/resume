// Set Bio

var bio = {
    name: "Riccardo Salucco",
    role: "Graphic Designer and Web Dev",
    contacts: {
        email: "<a href='mailto:riccardo.salucco@gmail.com'>riccardo.salucco@gmail.com</a>",
        github: "<a href='https://github.com/notthatred'>notthatred</a>",
        twitter: "<a href='https://twitter.com/RSalucco'>@RSalucco</a>",
        linkedIn: "<a href='https://it.linkedin.com/in/riccardosalucco'>View Profile</a>",
        blog: "<a href=''>notthatred.com</a>",
        location: "<a href=''>Firenze, Italia</a>"
    },
    welcomeMessage: "Welcome!",
    skills: ["HTML", "CSS", "Bootstrap", "Wordpress", "Javascript", "JQuery", "User Experience", "PHP", "Photoshop", "Illustrator", "Final Cut", "After Effects"],
    bioPic: "img/logo.png"
};

//Append Name and role

bio.display = function () {
    var name = bio.name;
    var myRole = bio.role;
    var formattedName = HTMLheaderName.replace("%data%", name);
    var formattedRole = HTMLheaderRole.replace("%data%", myRole);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);

    if (bio.welcomeMessage.length > 0) {
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

    var formattedContacts = [];
    formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContacts.push(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
    formattedContacts.push(HTMLblog.replace("%data%", bio.contacts.blog));
    formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for (i in formattedContacts) {
        $("#topContacts").append(formattedContacts[i]);
        $("#footerContacts").append(formattedContacts[i]);
    }

};

//Set Work Experiences

var work = {
    jobs: [
        {
            employer: "Freelance",
            title: "Graphic Design Consultant",
            location: "Firenze, Italia",
            datesWorked: "September 2011 - Present",
            description: "Creation of graphics, user interfaces, templates and layouts for use in design, print and web projects."
        },
        {
            employer: "Rebus Multimedia",
            title: "Graphic Design Consultant",
            location: "Firenze, Italia",
            datesWorked: "September 2011 - Present",
            description: "Creation of graphics, user interfaces, templates and layouts for use in design, print and web projects."
        },
        {
            employer: "Centro Studi Pluriversum",
            title: "Computer Science Teacher and Tutor",
            location: "Figline Valdarno, Italia",
            datesWorked: "September 2013 - February 2015",
            description: "Teacher and Tutor for Progetto TRIO labs in the Web Learning Points of Florence Area."
        },
        {
            employer: "IAL Toscana",
            title: "Computer Science Teacher and Tutor",
            location: "Figline Valdarno, Italia",
            datesWorked: "September 2013 - February 2015",
            description: "Teacher and Tutor for Progetto TRIO labs in the Web Learning Points of Florence Area."
        },
        {
            employer: "Substitute Tutor",
            title: "Computer Science Teacher and Tutor",
            location: "Siena, Italia",
            datesWorked: "December 2012 - February 2015",
            description: "Substitute Tutor for Progetto TRIO courses in the Web Learning Points of Siena Area."
        },
        {
            employer: "Qu.In Srl",
            title: "Computer Science Teacher and Tutor",
            location: "Empoli, Italia",
            datesWorked: "April 2013 - September 2013",
            description: "Teacher and tutor for IT courses, Microsoft Excel: basic, intermediate, advanced, Microsoft Word: basic, intermediate, " +
                    "advanced in Empoli and Castelfiorentino."
        },
        {
            employer: "Iris Multimedia Pro Srl",
            title: "Graphic Designer",
            location: "Firenze, Italia",
            datesWorked: "May 2010 - September 2011",
            description: "I was responsible of design graphic and web content in this media production startup." +
                    "We've worked on many projects for Italian TV channels, private brands and ADV agencies."
        },
        {
            employer: "Freelance",
            title: "Graphic Consultant",
            location: "Firenze, Italia",
            datesWorked: "October 2007 - April 2010",
            description: "I've worked with many companies that operates in different sectors like: " +
                    "Design, Marketing, Advertising, IT, Tourism, Art, Music and Engineering."
        }
    ]
};

//Setting a function to Display Work Experiences

work.display = function () {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

};

//Set Education

var education = {
    schools: [
        {
            name: "SSTI",
            datesAttended: "2009 - 2010",
            location: "Firenze, Italia",
            degree: "GPTI 2009: Production and Industrial’s Technologies Management – Information’s System Management",
            major: "Graduated in Cisco System IT ESSENTIAL &  CCNA Exploration courses",
            url: ""
        },
        {
            name: "Università degli studi di Firenze",
            datesAttended: "2004 - 2006",
            location: "Firenze, Italia",
            degree : "",
            major: "Communications",
            url: ""
        }
    ],
    onlineCourses: [
        {
            school: "Udacity",
            title: "Intro to jQuery",
            completed: "July 2015",
            url: "https://www.udacity.com/course/ud245"
        },
        {
            school: "Udacity",
            title: "How to Use Git and GitHub",
            completed: "July 2015",
            url: "https://www.udacity.com/course/ud775"
        },
        {
            school: "Udacity",
            title: "Javascript Basics",
            completed: "June 2015",
            url: "https://www.udacity.com/course/ud804"
        },
        {
            school: "Udacity",
            title: "Responsive Images",
            completed: "June 2015",
            url: "https://www.udacity.com/course/ud882"
        },
        {
            school: "Udacity",
            title: "Responsive Web Design Fundamentals",
            completed: "May 2015",
            url: "https://www.udacity.com/course/ud893"
        },
        {
            school: "Udacity",
            title: "Intro to HTML and CSS",
            completed: "May 2015",
            url: "https://www.udacity.com/course/ud304"
        },
        {
            school: "Coursera",
            title: "Human Computer Interaction",
            completed: "May 2014",
            url: "https://class.coursera.org/hci/lecture"
        }
    ]
};

//Setting a function to Display Education
education.display = function () {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        $("#education").append(HTMLonlineClasses);

        for (i in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);

        }

    }

};

//Set Projects

var projects = {
    "projects": [
        {
            title: "Resume",
            datesWorked: "July 2015",
            description: "Created an online resume as second project of Udacity" +
                    "Front-End Web Developer Nanodegree.",
            images: [""],
            url: ""
        },
        {
            title: "Online Portfolio",
            datesWorked: "June 2015",
            description: "Created an online portfolio of work as first project of Udacity" +
                    "Front-End Web Developer Nanodegree.",
            images: ["img/portfolio.jpg"],
            url: ""
        },
        {
            title: "notthatred",
            datesWorked: "January 2015",
            description: "Just a simple blog.",
            images: ["img/notthatred.jpg"],
            url: "http://www.notthatred.com/"
        }
    ]
};

//Setting a function to Display Projects

projects.display = function () {
    if (projects.projects.length > 0) {
        
        for (i in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }

        }

    }

};

//Display all

bio.display();
work.display();
projects.display();
education.display();

//Map

$("#mapDiv").append(googleMap);