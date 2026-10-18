const inscripciones = [
    { curso: "JavaScript Basico", costo: 350, esBecado: false },
    { curso: "Bases de Datos", costo: 400, esBecado: true },
    { curso: "Redes", costo: 300, esBecado: true }
];
const montosFinales = [];
let total = 0;
for (let i = 0; i < inscripciones.length; i++) {
    const { curso, costo, esBecado } = inscripciones[i];
    let monto;
    if (esBecado === true) {
        monto = costo * 0.75;
    } else {
        monto = costo;
    }
    montosFinales.push(monto);
    total = total + monto;
}
console.log("Montos finales:", montosFinales);
console.log("Total a recaudar: " + total + " Bs.");
function confirmarInscripciones(montoTotal, callback) {
    setTimeout(function() {
        callback(montoTotal);
    }, 2000);
}
function mostrarResumen(montoTotal) {
    console.log(
        "Procesamiento de pago finalizado. Total recaudado: " +
        montoTotal + " Bs."
    );
}
confirmarInscripciones(total, mostrarResumen);
