const empleados = [
    { nombre: "Rosa", salario: 3200 },
    { nombre: "Hugo", salario: 4100 },
    { nombre: "Ines", salario: 2900 }
];

let total = 0;

for (let i = 0; i < empleados.length; i++) {
    total = total + empleados[i].salario;
}

console.log("Total de planilla: " + total + " Bs.");