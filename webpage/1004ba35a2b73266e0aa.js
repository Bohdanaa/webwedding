const input = document.getElementById("name");
const label = document.querySelector(".feedback__label-name");
const input1 = document.getElementById("myInput");

input1.addEventListener("click", function() {
  this.value = "Відправлено";
});
input.addEventListener("focus", function() {
  label.textContent = "Ім`я та прізвище";
  label.style.margin = "-15px"; // Змінюємо margin на 10px
});

input.addEventListener("blur", function() {
  if (input.value === "") {
    label.textContent = "Будь ласка ведіть свої дані";
    label.style.margin = "0"; 
  }
});
