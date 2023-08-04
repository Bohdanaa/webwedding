import axios from 'axios';

const form = document.querySelector('form');
const messageDiv = document.getElementById('message');


form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const presence = document.getElementById('presence').value;
	const drinks = Array.from(document.querySelectorAll('input[name="drinks"]:checked')).map((checkbox) => checkbox.value);
	const car = Array.from(document.querySelectorAll('input[name="car"]:checked')).map((checkbox) => checkbox.value);


	const formData = new FormData();
	formData.append("name", name);
	formData.append("presence", presence);
	formData.append("drinks", drinks);
	formData.append("car", car);

	const response = await fetch("/api/submit", {
		method: "POST",
		body: formData
	});

	const result = await response.json();
	alert(result.message);
});
