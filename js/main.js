import { getAllData } from "./module/api.js"; //Importa la funcion para traer la data. 
import { allUsersHTML } from "./components/users.js"; //Importa la funcion que devuelve la info del HTML.
import { userInfoById } from "./module/userInfo.js"; // Importa la funcion que devuelve el dic
import { filtrarDicts } from "./module/nombreDescripcion.js"; //Importa la funcion que filtra los diccionarios con la info brindada.

let main = document.querySelector(".main"); //Trae la etiqueta main del HTML
let inputSearch = document.querySelector("#inputSearch");// Trae la etiqueta input del HTML



document.addEventListener("DOMContentLoaded", async e=>{ //Cada vez que ingrese un nuevo dato se actualiza.
    
    main.innerHTML = await allUsersHTML(await getAllData()); // Envia la data a la funcion allUsersHTML y retorna la plantila para agregarla al main. 
    
    inputSearch.addEventListener('input', async e => { //Cada vez que ingrese un nuevo dato se actualiza.
        let infoIngresada = (e.target.value).toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");//La variable infoIngresada guarda la info del buscador sin espacios a los extremos, sin tildes y en minusculas. 
        main.innerHTML = await allUsersHTML(await filtrarDicts(await getAllData(), infoIngresada)); //Envia la data a la funcion filtrarDicts y luego a la funcion allUsersHTML para que retorne la plantila para agregarla al main.
    });
});
