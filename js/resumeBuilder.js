var bio = {
	"name": "Riccardo Salucco",
	"role": "Front-End Web Developer",
	"contacts": {
		"email": "<a href='mailto:riccardo.salucco@gmail.com'>riccardo.salucco@gmail.com</a>",
		"github": "<a href='https://github.com/notthatred'>notthatred</a>",
		"twitter": "<a href='https://twitter.com/RSalucco'>twitter</a>",
		"linkedIn": "<a href='https://it.linkedin.com/in/riccardosalucco'>View Profile</a>",
		"blog": "<a href=''>notthatred.com</a>",
		"location": "<a href='#'>Firenze, Italia</a>"
	},
	"welcomeMessage": "Welcome!",
	"skills": ["HTML5", "CSS", "Bootstrap", "Photoshop", "Illustrator", "Javascript", "User Experience", "Final Cut", "After Effects"],
	"bioPic": "img/logo.png"
};

var work = {
	"jobs": [
		{
			"employer": "Freelance",
			"title": "Graphic Design Consultant",
			"location": "Firenze, Italy",
			"datesWorked": "September 2011 - Present",
			"description": "Creation of graphics, user interfaces, templates and layouts for use in design, print and web projects."
		},
		{
			"employer": "Rebus Multimedia",
			"title": "Graphic Design Consultant",
			"location": "Firenze, Italy",
			"datesWorked": "September 2011 - Present",
			"description": "Creation of graphics, user interfaces, templates and layouts for use in design, print and web projects."
		},
		{
			"employer": "Centro Studi Pluriversum",
			"title": "Computer Science Teacher and Tutor",
			"location": "Figline Valdarno - Borgo San Lorenzo - Pontassieve, Italy",
			"datesWorked": "September 2013 - February 2015",
			"description": "Teacher and Tutor for Progetto TRIO labs in the Web Learning Points of Florence Area."
		},
		{
			"employer": "IAL Toscana",
			"title": "Computer Science Teacher and Tutor",
			"location": "Figline Valdarno - Borgo San Lorenzo - Pontassieve, Italy",
			"datesWorked": "September 2013 - February 2015",
			"description": "Teacher and Tutor for Progetto TRIO labs in the Web Learning Points of Florence Area."
		},
		{
			"employer": "Substitute Tutor",
			"title": "Computer Science Teacher and Tutor",
			"location": "Siena - Poggibonsi, Italy",
			"datesWorked": "December 2012 - February 2015",
			"description": "Substitute Tutor for Progetto TRIO courses in the Web Learning Points of Siena Area."
		},
		{
			"employer": "Qu.In Srl",
			"title": "Computer Science Teacher and Tutor",
			"location": "Empoli - Castelfiorentino, Italy",
			"datesWorked": "April 2013 - September 2013",
			"description": "Teacher and tutor for IT courses, Microsoft Excel: basic, intermediate, advanced, Microsoft Word: basic, intermediate, " +
			"advanced in Empoli and Castelfiorentino."
		},
		{
			"employer": "Iris Multimedia Pro Srl",
			"title": "Graphic Designer",
			"location": "Firenze, Italy",
			"datesWorked": "May 2010 - September 2011",
			"description": "I was responsible of design graphic and web content in this media production startup." +
			"We've worked on many projects for Italian TV channels, private brands and ADV agencies."
		},
		{
			"employer": "Freelance",
			"title": "Graphic Consultant",
			"location": "Firenze, Italy",
			"datesWorked": "October 2007 - April 2010",
			"description": "I've worked with many companies that operates in different sectors like: "+ 
			"Design, Marketing, Advertising, IT, Tourism, Art, Music and Engineering."
		}
	]
};

var education = {
	"schools": [
		{ 
			"name": "SSTI",
			"datesAttended": "2009 - 2010",
			"location": "Firenze, Italy",
			"degree": "GPTI 2009: Production and Industrial’s Technologies Management – Information’s System Management",
			"courses": "Graduated in Cisco System IT ESSENTIAL &  CCNA Exploration courses"
		},
		{ 
			"name": "Università degli studi di Firenze",
			"datesAttended": "2004 - 2006",
			"location": "Firenze, Italy",
			"course": "Communications"
		}		
	],
	"onlineCourses": [
		{ 
			"school": "Udacity",
			"title": "Intro to jQuery",
			"completed": "July 2015",
			"url": "https://www.udacity.com/course/ud245"
		},
		{ 
			"school": "Udacity",
			"title": "How to Use Git and GitHub",
			"completed": "July 2015",
			"url": "https://www.udacity.com/course/ud775"
		},
		{ 
			"school": "Udacity",
			"title": "Javascript Basics",
			"completed": "June 2015",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ 
			"school": "Udacity",
			"title": "Responsive Images",
			"completed": "June 2015",
			"url": "https://www.udacity.com/course/ud882"
		},
		{ 
			"school": "Udacity",
			"title": "Responsive Web Design Fundamentals",
			"completed": "May 2015",
			"url": "https://www.udacity.com/course/ud893"
		},	
		{ 
			"school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "May 2015",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ 
			"school": "Coursera",
			"title": "Human Computer Interaction",
			"completed": "May 2014",
			"url": "https://class.coursera.org/hci/lecture"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Resume",
			"datesWorked": "July 2015",
			"description": "Created an online resume as second project of Udacity's " +
			"Front-End Web Developer Nanodegree.",
			"images": [""],
			"url": ""
		},
		{
			"title": "Online Portfolio",
			"datesWorked": "June 2015",
			"description": "Created an online portfolio of work as first project of Udacity's " +
			"Front-End Web Developer Nanodegree.",
			"images": [""],
			"url": ""
		},
		{
			"title": "notthatred",
			"datesWorked": "January 2015",
			"description": "Just a simple blog.",
			"images": ["images/web.jpg"],
			"url": "http://www.notthatred.com/"
		}
	]
};


var name = "Riccardo Salucco";
var myRole = "Front-End Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

var formattedContacts = [];
formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContacts.push(HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn));
formattedContacts.push(HTMLblog.replace("%data%", bio.contacts.blog));
formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

function displaySkillsandContacts() {
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(i in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}

	for(i in formattedContacts) {
		$("#topContacts").append(formattedContacts[i]);
		$("#footerContacts").append(formattedContacts[i]);
	}	
}

displaySkillsandContacts();

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
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

}

displayWork();