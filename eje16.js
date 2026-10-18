function transformarLista(arreglo, funcion) {
    const nuevo = [];

    for (let i = 0; i < arreglo.length; i++) {
        nuevo.push(funcion(arreglo[i]));
    }

    return nuevo;
}

function aplicarImpuesto(precio) {
    return precio * 1.15;
}

const precios = [100, 200, 50];

const preciosConImpuesto = transformarLista(precios, aplicarImpuesto);

console.log("Precios con impuesto:", preciosConImpuesto);
