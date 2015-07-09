var bio = {
	"name": "Riccardo Salucco",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "<a href='tel:333 3333333'>333 3333333</a>",
		"email": "<a href='mailto:riccardo.salucco@gmail.com'>riccardo.salucco@gmail.com</a>",
		"github": "<a href='https://github.com/notthatred'>notthatred</a>",
		"twitter": "<a href='https://twitter.com/RSalucco'>twitter</a>",
		"linkedIn": "<a href='https://it.linkedin.com/in/riccardosalucco'>View Profile</a>",
		"location": "<a href='#'>Firenze, Italia</a>"
	},
	"welcomeMessage": "",
	"skills": ["HTML5", "CSS", "Bootstrap", "Photoshop", "illustrator", "Javascript", "Final Cut"],
	"bioPic": "img/logo.png"
};

var name = "Riccardo Salucco";
var myRole = "Front-End Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);