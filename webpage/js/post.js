import axios from 'axios';

const form = document.querySelector('form');
const messageDiv = document.getElementById('message');


form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const presence = document.getElementById('presence').value;
	const drinks = Array.from(document.querySelectorAll('input[name="drinks"]:checked')).map((checkbox) => checkbox.value);
	const car = Array.from(document.querySelectorAll('input[name="car"]:checked')).map((checkbox) => checkbox.value);


	try {
		const response = await axios.post(' https://tele-py-peach.vercel.app/submit', {
			name,
			presence,
			drinks,
			car
		});
		if (response.ok) {
			// Відображення сповіщення про успішне відправлення
			messageDiv.textContent = "Повідомлення успішно відправлено нам в телеграм канал";
			messageDiv.classList.remove("hidden");
			form.reset();
		} else {
			// Обробка помилки відправки форми
			messageDiv.textContent = "Сталася помилка при відправці повідомлення";
			messageDiv.classList.remove("hidden");
		}
	} catch (error) {
		console.error('Error:', error);
		// Обробка інших помилок
		messageDiv.textContent = "Сталася помилка при відправці повідомлення";
		messageDiv.classList.remove("hidden");
	}
});
