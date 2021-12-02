const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const panes = document.querySelector("#panes");
const cantidad = document.querySelector("#cantidad");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por contactarnos " + nombre.value + " " + apellido.value);
  alert("Tipo de pan elegido: " + panes.value + " cantidad: " + cantidad.value);
});
