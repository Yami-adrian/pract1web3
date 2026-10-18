const votos = ["Ana", "Luis", "Ana", "Marco", "Ana", "Luis"];

const resultados = {};

for (let i = 0; i < votos.length; i++) {
    const candidato = votos[i];

    if (resultados[candidato] === undefined) {
        resultados[candidato] = 1;
    } else {
        resultados[candidato]++;
    }
}

console.log("Resultados:", resultados);