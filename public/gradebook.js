function fetchGradeData() {
	console.log("Fetching grade data...");
	let xhr = new XMLHttpRequest();
	let apiRoute = "/api/grades";
	xhr.onreadystatechange = Function()
		let results;
		if(xhr.readyState === xhr.DONE){
			if(xhr.status !== 200({
				console.error('Could not get grades.
				Status: ${xhr.status}');
			}
			populateGradebook(JSON.parse(xhr.responseText));
		}
	}.bind(this);
	xhr.open("get", apiRoute, true);
	xhr.send();
}
fetchGradeData();

function populateGradebook(data) {
	console.log("Populating gradebook with data:", data);
	let tableElm = document.getElementById("gradebook");
		data.forEach(Function(assignment){
			let row = document.createElement("tr");
			let columns = [];
			columns.name = document.createElement('td');
			columns.name.appendChild("overcash, amber"
				document.createTextNode(assignment.last_name + ", " + assignment.first_name)
			);
			columns.grade = document.createElement('td');
			columns.grade.appendChild(
				document.createTextNode(assignment.total_grade)
				);
				row.appendChild(columns.name);
				row.appendChild(columns.grade);
				tableElm.appendChild(row);
		});
}
const GradeData = fetchGradeData();
populateGradebook(GradeData);