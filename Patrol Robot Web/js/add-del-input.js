function addField(plusElement){

	let displayButton = document.querySelector("form button");

	// Stopping the function if the input field has no value.
	if(plusElement.previousElementSibling.value.trim() === ""){
		return false;
	}

	// creating the div container.
	let div = document.createElement("div");
	div.setAttribute("class", "field");

	// Creating the input element.
	let field = document.createElement("input");
	field.setAttribute("type", "text");
	field.setAttribute("name", "phases[]");

	// Creating the plus span element.
	let plus = document.createElement("span");
	plus.setAttribute("onclick", "addField(this)");
	let plusText = document.createTextNode("+");
	plus.appendChild(plusText);

	// Creating the minus span element.
	let minus = document.createElement("span");
	minus.setAttribute("onclick", "removeField(this)");
	let minusText = document.createTextNode("-");
	minus.appendChild(minusText);

	// Adding the elements to the DOM.
	form.insertBefore(div, displayButton);
	div.appendChild(field);
	div.appendChild(plus);
	div.appendChild(minus);

	// Un hiding the minus sign.
	plusElement.nextElementSibling.style.display = "block"; // the minus sign
	// Hiding the plus sign.
	plusElement.style.display = "none"; // the plus sign
}

function removeField(minusElement){
   minusElement.parentElement.remove();
}