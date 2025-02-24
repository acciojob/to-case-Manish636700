function toCase(text) {

	let low = text.toLowerCase();
	let upp = text.toUpperCase();
	return `${low}-${upp}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
