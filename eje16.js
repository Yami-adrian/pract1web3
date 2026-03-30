function miPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de la promesa");
    }, 1000);
  });
}
miPromesa().then(res => console.log(res));
async function ejecutar() {
  const res = await miPromesa();
  console.log(res);
}ejecutar();