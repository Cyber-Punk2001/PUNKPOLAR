const inicio = document.getElementById("inicio");

const cajero = document.getElementById("cajero");

const boton = document.getElementById("btnInicio");

boton.addEventListener("click", ()=>{

    inicio.style.display="none";

    cajero.style.display="flex";

});