function initXHR(x, value) {
	console.log(x); 
	if (x == 'home') {
		retrieveActiveListsFromServer('/dashboard/jobs/', 'lists');
		document.getElementById("jobs").style.display = "block";
		
	}
	else if (x == 'lists') {
		//		retrieveActiveListsFromServer('/app/json/lists.json');
		retrieveActiveListsFromServer('/app/list/', 'jobs');
		document.getElementById("jobs").style.display = "block";
		document.getElementById("lists").style.display = "block";
		document.getElementById("gList").style.display = "none";		
	}
	else if (x == 'gList') {
		retrieveActiveListsFromServer('/app/list/' + value, 'gList');
		document.getElementById("home").style.display = "none";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "block";
	}
	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
	}
}

function retrieveActiveListsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			if (operation == "jobs") {
				populateListsView('jobs', returnValues);
			}
			else if (operation == "gList") {
				populateListItems('tasks', returnValues);				
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//DOM based function
function populateListsView(elementId, lists) {
	var element = document.getElementById(elementId);
	var newElement = "<h3 class=\"panel-heading\">Active Lists</h3>";

	for (var i = 0; i < lists.length; i++) {
	
		newElement += "<p>" + lists[i].description  + "</p>";
		
	}

	element.innerHTML = newElement;
}

//DOM based function
function populateListItems2(elementId, list) {
	var listItems = list.tasks;
	var element = document.getElementById(elementId);
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		newElement += "<tr>";
		newElement += "<td>" + listItems[i].description + "</td>";
		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}

	element.innerHTML = newElement;	
}

//JQuery based function
function populateListItems(elementId, list) {
	var listItems = list.tasks;
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		newElement += "<tr>";
		newElement += "<td>" + listItems[i].description + "</td>";
		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}
	$("#" + elementId).append(newElement);
}
