const form = document.querySelector('form');
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	const serverUrl = "https://new-bohdanaa.vercel.app/submit";

	const response = await fetch(serverUrl, {
		method: "POST",
		body: formData
	});

	if (response.ok) {
		messageDiv.textContent = "Повідомлення успішно відправлено нам в телеграм канал";
		messageDiv.classList.remove("hidden");
		form.reset();
	} else {
		messageDiv.textContent = "Сталася помилка при відправці повідомлення";
		messageDiv.classList.remove("hidden");
	}
});