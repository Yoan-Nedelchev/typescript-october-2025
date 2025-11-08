function multiply(
  num1?: string | number,
  num2?: string | number,
  num3?: string | number
): number {
  return Number(num1 || 1) * Number(num2 || 1) * Number(num3 || 1);
}

console.log(multiply("3", 5, "10"));
console.log(multiply("2", "2"));
console.log(multiply(undefined, 2, 3));
console.log(multiply(7, undefined, "2"));
console.log(multiply());