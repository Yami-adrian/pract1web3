function miPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mensaje desde la promesa");
    }, 1000);
  });
}
function conCallback(cb) {
  miPromesa().then(res => cb(res));
}
conCallback((res) => {
  console.log(res);
});