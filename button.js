// var clickButton = document.querySelector("#clickButton");
var inputData= document.querySelector("input");
var di1 = document.getElementById("div1");
// var idDisplay = document.getElementById("#idDisplay")
var store = [];

clickButton.addEventListener("click", function(){
	addData();
});

deleteButton.addEventListener("click", function(){
	removeData();
});


function addData(){
	store.push(inputData.value);
	inputData.value = "";
	showData();
}

function showData(){
	inputData.value = " ";
	di1.innerHTML = store;
	console.log(store);
}

function removeData(){
	store.pop();
	console.log(store)
	di1.innerHTML = store;
}

