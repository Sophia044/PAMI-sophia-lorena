function multiplicar(a: number, b: number) {
    return a * b; // TypeScript infere que o retorno é 'number'
  }
  console.log(multiplicar(3, 4)); // 12
  