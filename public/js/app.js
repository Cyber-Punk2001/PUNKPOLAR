const inicio = document.getElementById("inicio");
const cajero = document.getElementById("cajero");
const botonInicio = document.getElementById("btnInicio");
const contenido = document.getElementById("contenido");
const botonCash = document.getElementById("cash");

// Abrir el cajero
botonInicio.addEventListener("click", () => {

    inicio.style.display = "none";
    cajero.style.display = "flex";

});

// Abrir Código CASH
botonCash.addEventListener("click", () => {

    contenido.innerHTML = `

        <h2>Código CASH</h2>

        <form id="formCash">

            <label>Número de identificación</label>

            <input
                type="text"
                placeholder="Ingrese su identificación"
                required
            >

            <label>Código de retiro</label>

            <input
                type="text"
                placeholder="Ingrese el código"
                required
            >

            <label>Monto</label>

            <input
                type="number"
                placeholder="Ingrese el monto"
                required
            >

            <button type="submit" class="continuar">

                Continuar

            </button>

        </form>

    `;

});