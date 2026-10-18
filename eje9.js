const preciosUsd = [10, 25, 40];

const preciosBs = [];

for (let i = 0; i < preciosUsd.length; i++) {
    preciosBs.push(preciosUsd[i] * 6.96);
}

console.log("Precios en bolivianos:", preciosBs);