const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Паёми шумо қабул шуд. Ташаккур!");

  form.reset();
});
