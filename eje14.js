const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Garcia Marquez",
        disponible: true
    },
    {
        titulo: "Rayuela",
        autor: "Cortazar",
        disponible: false
    },
    {
        titulo: "El Aleph",
        autor: "Borges",
        disponible: true
    }
];

for (let libro of libros) {
    const { titulo, autor, disponible } = libro;

    if (disponible === true) {
        console.log("Disponible: " + titulo + " - " + autor);
    }
}