let modal = document.getElementById("modelContainer");
let editModel = document.getElementById("editModelContainer");
let span = document.querySelectorAll("span")
let cancel = document.getElementById("CancelAdd");
let cancelEdit = document.getElementById("CancelEdit");

document.getElementById("buttonAdd").addEventListener("click", function() {
  modal.style.display = "block";
  randomColor()
})
span[0].onclick = () => {
  	modal.style.display = "none";
}
document.getElementById('closeBox').addEventListener("click", function() {
  	editModel.style.display = "none";
})
cancel.onclick = () => {
  	modal.style.display = "none";
}
cancelEdit.onclick = () =>{
  	editModel.style.display = "none";
}
  	
let data = [];
let dataAdder = () =>{
	let dataToAdd = {
			name: document.getElementById('name').value,
			desc: document.getElementById('description').value,
			status: false
		}
		document.getElementById('name').value = ''
		document.getElementById('description').value = ''
		data.unshift(dataToAdd)
		printData()
}
let getInput = () =>{
	(document.getElementById('name').value.length>0 && document.getElementById('description').value.length>0) ? dataAdder() : alert('No Input or Incomplete Input')
}
let printData = () => {
	randomColor()
	document.getElementById('container').innerHTML = '';
	for (let i = 0; i < data.length; i++) {
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
}
document.getElementById("confirmAdd").addEventListener("click", getInput);

let deleteData = (index) => {
	if (confirm("Are you sure you want to delete ?")) {
		console.log(index)
		data.splice(index, 1);
		printData()
	}
}
let editIndex;
let editData = (index) => {
	console.log(index)
	editIndex = index;
	editModel.style.display = "block";
}

let confirmEdit = (index) => {
	editModel.style.display = "none";
	let nn = document.getElementById("newName").value
	let dd = document.getElementById("newDescription").value
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

let randomColor = () => {
	let colorletters = 'ABCDEF0123456789';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += colorletters[Math.floor(Math.random() * 16)];
	}
	document.getElementById('navbar').style.background = color
}

let clicked = (index) => {
	console.log(index)
	data[index].status = !data[index].status;
	printData()
}

