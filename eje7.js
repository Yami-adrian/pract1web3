const calificaciones = [45, 51, 78, 60, 39, 91, 50, 85];

let aprobados = 0;

for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 51) {
        aprobados++;
    }
}

console.log("Estudiantes aprobados: " + aprobados);