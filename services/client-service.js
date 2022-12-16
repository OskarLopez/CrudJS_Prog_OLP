//*Abrir http (método, url)

//* CRUD    -  Métodos http
//* Create  -  POST
//* Read    -  GET
//* Update  -  PUT/PATH
//* Delete  -  DELETE

//*Fetch API
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientServices = {
  listaClientes,
};
