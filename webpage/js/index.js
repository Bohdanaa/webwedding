

// Отримати посилання на форму
const form = document.querySelector('form');


// Обробник події для відправки форми
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Заборонити стандартну відправку форми

  // Отримати значення полів форми
  const name = document.getElementById('name').value;
  const presence = document.getElementById('presence').value;
  const drinks = Array.from(document.querySelectorAll('input[name="drinks"]:checked')).map((checkbox) => checkbox.value);
  const car = Array.from(document.querySelectorAll('input[name="car"]:checked')).map((checkbox) => checkbox.value);

  // Відправити дані на сервер
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, presence, drinks, car }),
  })
    
    .then(function(response) {

      // Додати додаткові дії після відправки форми, якщо потрібно
      const successMessage = response.data.message;
    
      // Відображення сповіщення про успішне відправлення
      successMessage.textContent = successMsg;
      
      // Очищення форми або здійснення інших дій
      form.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      // Обробити помилку відправки форми, якщо потрібно
    });
});

