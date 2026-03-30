setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
function esperar(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function ejecutar() {
  await esperar(1000);
  console.log("1");
  await esperar(1000);
  console.log("2");
  await esperar(1000);
  console.log("3");
}ejecutar();