const empleados = [
    { codigo: 101, nombre: "Marco", antiguedad: 12 },
    { codigo: 105, nombre: "Sofia", antiguedad: 6 },
    { codigo: 110, nombre: "Raul", antiguedad: 15 }
];
let encontrado = 0;
let mayores = 0;
for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].codigo === 105) {
        console.log(
            "Empleado encontrado: " +
            empleados[i].nombre +
            " (codigo " + empleados[i].codigo + ")"
        );

        encontrado = 1;
    }

    if (empleados[i].antiguedad > 10) {
        mayores++;
    }
}
if (encontrado === 0) {
    console.log("Empleado no encontrado");
}
console.log("Empleados con mas de 10 años de antiguedad: " + mayores);
