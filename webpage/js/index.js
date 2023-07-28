// Отримати посилання на форму
const form = document.querySelector('form');
const messageDiv = document.getElementById("message");


// Обробник події для відправки форми
form.addEventListener('submit', async (event) => {
	event.preventDefault(); // Заборонити стандартну відправку форми

	// Отримати значення полів форми
	const name = document.getElementById('name').value;
	const presence = document.getElementById('presence').value;
	const drinks = Array.from(document.querySelectorAll('input[name="drinks"]:checked')).map((checkbox) => checkbox.value);
	const car = Array.from(document.querySelectorAll('input[name="car"]:checked')).map((checkbox) => checkbox.value);

	const herokuURL = 'https://python-server1-6c32169bb599.herokuapp.com/submit';
	// Відправити дані на сервер
	try {
		const response = await fetch(herokuURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, presence, drinks, car }),
			mode: 'cors',
			credentials: 'include',
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

