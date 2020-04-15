var modal = document.getElementById("modelContainer");
var editModel = document.getElementById("editModelContainer");
var span = document.querySelectorAll("span")
var cancel = document.getElementById("CancelAdd");
var cancelEdit = document.getElementById("CancelEdit");

// var editCancel = document.getElementById();
console.log(span)
document.getElementById("buttonAdd").addEventListener("click", function() {
  modal.style.display = "block";
})
span[0].onclick = function() {
  	modal.style.display = "none";
}
document.getElementById('closeBox').addEventListener("click", function() {
  	editModel.style.display = "none";
})
cancel.onclick = function () {
  	modal.style.display = "none";
	// body...
}
cancelEdit.onclick = function () {
  	editModel.style.display = "none";
  	// body...
}
  	
var data = [];
function getInput() {
	var n = document.getElementById('name').value
	var d = document.getElementById('description').value
	if (n.length>0 && d.length>0) {
		var dataToAdd = {
			name: n,
			desc: d 
		}
		data.unshift(dataToAdd)
		printData()
	}
	else {
		alert('No input')
		return;
	}
}

function printData() {
	document.getElementById('container').innerHTML = '';
	for (var i = 0; i < data.length; i++) {
		document.getElementById('container').innerHTML += `
			<div class="task">
				<div class="content">
					<h2>${data[i].name}</h2>
					<br>
					<p>${data[i].desc}</p>
				</div>
				<div class="buttons">
					<button class="editButton" id="edit" onclick="editData(${i})">Edit Task</button>
					<button class="deleteButton" id="delete" onclick="deleteData(${i})">Delete Task</button>
				</div>
			</div>
		`;
	}
		modal.style.display = "none";

	// body...
}
document.getElementById("confirmAdd").addEventListener("click", getInput);
function deleteData(index) {
	if (confirm("Are you sure you want to delete ?")) {
		data.splice(index, 1);
		printData()
	}
}
var editIndex;
function editData(index) {
	console.log(index)
	editIndex = index;
	editModel.style.display = "block";
}

function confirmEdit(index) {
	editModel.style.display = "none";
	var nn = document.getElementById("newName").value
	var dd = document.getElementById("newDescription").value
	console.log(nn)
	console.log(dd)
	if (nn.length > 0) {
		data[editIndex].name = nn;
	}
	if (dd.length > 0) {
		data[editIndex].desc = dd;
	}
	printData()
}