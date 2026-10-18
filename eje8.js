const promedios = [78, 92, 88, 95, 60, 90, 84];

const becados = [];

for (let i = 0; i < promedios.length; i++) {
    if (promedios[i] >= 90) {
        becados.push(promedios[i]);
    }
}

console.log("Estudiantes becados:", becados);