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
	"skills": ["HTML5", "CSS", "Bootstrap", "Photoshop", "illustrator", "Javascript", "Final Cut"],
	"bioPic": "img/logo.png"
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