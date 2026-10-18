function calcularArea(base, altura, formula) {
    let area = formula(base, altura);
    console.log("Area calculada: " + area);
}

function formulaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function formulaRectangulo(base, altura) {
    return base * altura;
}

calcularArea(8, 5, formulaTriangulo);
calcularArea(8, 5, formulaRectangulo);