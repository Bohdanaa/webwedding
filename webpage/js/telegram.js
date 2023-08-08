function submitForm(event) {
	event.preventDefault();

	// Отримання даних з полів форми
	var formData = new FormData(event.target);

	// Виконання POST-запиту до бекенду
	fetch("https://new-bohdanaa.vercel.app/submit", {
		method: "POST",
		body: formData
	})
		.then(response => response.json())
		.then(data => {
			// Обробка відповіді від бекенду
			if (data.message === "Data sent successfully") {
				alert("Data sent successfully");
			} else {
				alert("Failed to send data");
			}
		})
		.catch(error => {
			console.error("Error:", error);
		});
}
