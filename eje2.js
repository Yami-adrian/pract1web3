const temperaturas = [22, 24, 27, 30, 29, 26, 23, 21];

let suma = 0;

for (let i = 0; i < temperaturas.length; i++) {
    suma = suma + temperaturas[i];
}

let promedio = suma / temperaturas.length;

console.log("Temperatura promedio: " + promedio.toFixed(2) + "°C");

if (promedio > 25) {
    console.log("Clasificacion del dia: caluroso");
} else {
    console.log("Clasificacion del dia: templado");
}