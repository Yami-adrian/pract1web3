function mayorMenor(arr) {
  return {
    mayor: Math.max(...arr),
    menor: Math.min(...arr)
  };
}
console.log(mayorMenor([3,1,5,4,2]));
