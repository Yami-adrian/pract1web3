const fila = ["Rosa", "Tomas", "Ines", "Hugo", "Vera"];

console.log("Fila inicial: ", fila);

let atendido = fila.shift();
console.log("Atendido: " + atendido + " -> Fila actual: ", fila);

atendido = fila.shift();
console.log("Atendido: " + atendido + " -> Fila actual: ", fila);