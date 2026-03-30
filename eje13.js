function miPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola desde la promesa");
    }, 1000);
  });
}
miPromesa()
  .then(res => {
    console.log(res);
    return miPromesa();
  })
  .then(res => console.log(res));
async function ejecutar() {
  const r1 = await miPromesa();
  console.log(r1);

  const r2 = await miPromesa();
  console.log(r2);
}ejecutar();