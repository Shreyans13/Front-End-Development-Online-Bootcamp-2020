var modal = document.getElementById("modelContainer");
var editModel = document.getElementById("editModelContainer");
var span = document.querySelectorAll("span")
var cancel = document.getElementById("CancelAdd");
var cancelEdit = document.getElementById("CancelEdit");

document.getElementById("buttonAdd").addEventListener("click", function() {
  modal.style.display = "block";
  randomColor()
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
			desc: d,
			status: false
		}
		document.getElementById('name').value = ''
		document.getElementById('description').value = ''
		data.unshift(dataToAdd)
		printData()
	}
	else {
		alert('No input')
		return;
	}
}

function printData() {
	randomColor()
	document.getElementById('container').innerHTML = '';
	for (var i = 0; i < data.length; i++) {
		if (!data[i].status){
			document.getElementById('container').innerHTML += `
				<div class="task" id=${i}>
					<div class="content" id=${i}>
						<i class="far fa-check-square box" id="checkbox ${i}" onclick="clicked(${i})"></i>
						<span id="text" class="h2">${data[i].name}</span>
						<br>
						<p id="text">${data[i].desc}</p>
					</div>
					<div class="buttons">
						<button class="editButton" id="edit" onclick="editData(${i})"><i class="far fa-edit"></i> Edit Task</button>
						<button class="deleteButton" id="delete" onclick="deleteData(${i})"><i class="far fa-minus-square"></i> Delete Task</button>
					</div>
				</div>
			`;
		} else {
			document.getElementById('container').innerHTML += `
				<div class="task" id=${i}>
					<div class="content linethrough" id=${i}>
						<i class="fas fa-check-square box" id="checkbox ${i}" onclick="clicked(${i})"></i>
						<span id="text" class="h2">${data[i].name}</span>
						<br>
						<p id="text">${data[i].desc}</p>
					</div>
					<div class="buttons">
						<button class="editButton" id="edit" onclick="editData(${i})"><i class="far fa-edit"></i> Edit Task</button>
						<button class="deleteButton" id="delete" onclick="deleteData(${i})"><i class="far fa-minus-square"></i> Delete Task</button>
					</div>
				</div>
			`;
		}
	}


		modal.style.display = "none";

	// body...
}
document.getElementById("confirmAdd").addEventListener("click", getInput);


// function deleteData(index) {
let deleteData = (index) => {
	if (confirm("Are you sure you want to delete ?")) {
		console.log(index)
		// data[index].status = true;
		// delete(data[index])
		data.splice(index, 1);
		// Array.prototype.map.call(document.querySelectorAll('.task'),(ob)=>{
		// 	console.log("ob.id = "+ob.id)
		// 	ob.className = (ob.id==index) ? "task none" : ob.className;
		// })
		printData()
	}
}
var editIndex;
// function editData(index) {
let editData = (index) => {
	console.log(index)
	editIndex = index;
	editModel.style.display = "block";
}

// function confirmEdit(index) {
let confirmEdit = (index) => {
	editModel.style.display = "none";
	var nn = document.getElementById("newName").value
	var dd = document.getElementById("newDescription").value
	if (nn.length > 0) {
		data[editIndex].name = nn;
	}
	if (dd.length > 0) {
		data[editIndex].desc = dd;
	}
	document.getElementById('name').value = ''
		document.getElementById('description').value = ''
	printData()
}

// function randomColor() {
let randomColor = () => {
	var colorletters = 'ABCDEF0123456789';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += colorletters[Math.floor(Math.random() * 16)];
	}
	document.getElementById('navbar').style.background = color
}


let clicked = (index) => {
	console.log(index)
	data[index].status = !data[index].status;
	printData()
	// let change = (i) => {
	// 	data[i].status = data[i].status ? "false" : "true"
	// 	return "content linethrough"
	// }
	// let change2 = (i) => {
	// 	data[i].status = data[i].status ? "false" : "true"
	// 	return "content"
	// }
	// let c1 = () => {
	// 	index.className = "fas fa-check-square box"
	// 	Array.prototype.map.call(document.querySelectorAll('.content'),(ob)=>{
	// 		ob.className = (ob.id==index.id.split(' ')[1]) ? change(ob.id) : ob.className

	// 	})
	// }
	
	// let c2 = () => {
	// 	index.className = "far fa-check-square box"
	// 	Array.prototype.map.call(document.querySelectorAll('.content'),(ob)=>{
	// 		ob.className = (ob.id==index.id.split(' ')[1]) ? change2(ob.id) : ob.className
	// 	})
	// }
	// (index.className=="far fa-check-square box")?c1():c2();

}

