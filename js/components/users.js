export const allUsersHTML = async data => {
    let plantilla = "";

    data.forEach(dict => { //Itera sobre cada diccionario.
        plantilla += /*html*/ `
            <article class="container_persona">
            <section class="imagen_persona">
                <img src='${dict.avatar}'>
            </section>
            <section class="informacion_persona">
                <strong>${dict.name_full}</strong>
                <span>${dict.description}</span>
            </section>
        </article>`; //Agrega cada dato de cada diccionario al string "plantilla".
    })
    return plantilla;
};