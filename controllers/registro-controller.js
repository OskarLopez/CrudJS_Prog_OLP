import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

//*Evento submit: iniciar el envio del formulario en JS.
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .crearCliente(nombre, email)
    .then(() => {
      window.location.href = "../screens/registro_completado.html";
    })
    .catch((err) => console.log(err));
});
