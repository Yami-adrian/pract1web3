function esPalindromo(cadena) {
  const limpio = cadena.toLowerCase();
  const invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}
console.log(esPalindromo("oruro")); 
console.log(esPalindromo("hola"));  