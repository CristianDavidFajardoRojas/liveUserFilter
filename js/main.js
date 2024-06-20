import { getAllData } from "./module/api.js"; //Importa la funcion para traer la data. 
import { allUsersHTML } from "./components/users.js"; //Importa la funcion que devuelve la info del HTML.

let main = document.querySelector(".main"); //Trae la etiqueta main del HTML
main.innerHTML = await allUsersHTML(await getAllData()); // Envia la data a la funcion allUsersHTML y retorna la plantila para agregarla al main. 