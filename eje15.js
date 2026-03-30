function conPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hecho con callback");
    }, 2000);
  });
}conPromesa().then(res => console.log(res));