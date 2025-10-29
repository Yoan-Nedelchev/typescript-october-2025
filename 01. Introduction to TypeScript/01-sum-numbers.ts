function evenSum(
  firstNum: number,
  secondNum: number,
  thirdNum: number
): boolean {
  const sum = firstNum + secondNum + thirdNum;
  return sum % 2 === 0 ? true : false
}

console.log(evenSum(1,2,3))
console.log(evenSum(2,2,3))