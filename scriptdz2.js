
function createBlueDiv(){
	var parentElem = document.body;
	var newDivElem = document.createElement('div');
	
	newDivElem.innerHTML = 'Блок';
	newDivElem.style.border = '2px solid blue';
	parentElem.appendChild(newDivElem);	
}

function createRedDiv(){
	var parentElem = document.body;
	var newDivElem = document.createElement('div');
	
	newDivElem.innerHTML = 'Блок';
	newDivElem.style.border = '2px solid red';
	parentElem.appendChild(newDivElem);	
}

function create20Div(){
	var i;
	for (i = 1; i <=20; i++){
		if (i % 2==0){			
			createRedDiv();			
		}
		else {
			createBlueDiv();
		}
		
	}
}
