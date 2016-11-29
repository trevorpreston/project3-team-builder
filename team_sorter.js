let students = [
	"Aaron",
	"Ady",
	"Alexander",
	"Andrew",
	"Byron (Paris)",
	"Cecil",
	"Damira",
	"Dawa",
	"Donald",
	"Grace",
	"Jaemin",
	"Janelle",
	"Jimmy",
	"Jonathan",
	"Lauren",
	"Matt",
	"Mathew",
	"Michael",
	"Nicholas",
	"Nicky",
	"Olga",
	"Phil",
	"Pranav",
	"Robert",
	"Scott",
	"Susana",
	"Carla",
	"Daniel",
	"Darryl",
	"Debika",
	"Eric",
	"Hadas",
	"Imani",
	"John",
	"Joey",
	"Kevin",
	"Kieran",
	"Krystyna",
	"Lee",
	"Matthew",
	"Matthew",
	"Mohamed",
	"Natty",
	"Nico",
	"Sabrina",
	"Sang Min (Samuel)",
	"Skylar",
	"Synclair",
	"Tenzin",
	"Valeria",
	"William"
]


let teams = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
]

function sortTeams(){
	let currentTeam = Math.floor(Math.random() * 13)
	let currentStudent = Math.floor(Math.random() * students.length)

	if (students.length){
		if (teams[currentTeam].length < 4) {
			teams[currentTeam].push(students[currentStudent]);
			students.splice(currentStudent,1);
		};
		sortTeams();
	}
}


sortTeams();
console.log(teams)





