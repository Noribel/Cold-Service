
const precioPorBtu = 70;
let tipoDeAireA = 0;
let modelo = "";
let costoTotal = 0;

function calcularCosto() {

    tipoDeAireA = parseFloat(prompt("Por favor, ingrese los BTU del aire acondiconado"));

    costoTotal = tipoDeAireA * precioPorBtu;
    modelo = prompt("Ingrese si su aire acondicionado es de (Ventana o tipo Split)");

    while(modelo !== "Ventana" && modelo !== "Split") {
        modelo = prompt("Ingrese el tipo de aire acondiconado (Ventana o Split)");

        if (modelo === "modelo") {
            costoTotal = costoTotal * 1.1;  
        }
    }

    alert("El costo del servicio es de $" + costoTotal);
}

calcularCosto();



