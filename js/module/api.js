export const getAllData = async() => {
    let res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/user`);
    let data = res.json();
    return data;
}; //Funcion que trae la data del api.