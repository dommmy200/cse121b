const form = document.getElementById('form');
const itemname = document.getElementById('itemname');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// the trim() is to remove the white-spaces from the returned input value
	const itemValue = itemname.value.trim();
	const priceValue = price.value.trim();
	const quantityValue = quantity.value.trim();
	console.error(itemValue);
	
	if(itemValue === '') {
		setErrorFor(itemname, 'Item name cannot be blank');
	} else {
		setSuccessFor(itemname);
	}
	
	if(priceValue === '') {
		setErrorFor(price, 'Price cannot be blank');
	} else {
		setSuccessFor(price);
	}
	
	if(quantityValue === '') {
		setErrorFor(quantity, 'Quantity cannot be blank');
	} else {
		setSuccessFor(quantity);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}