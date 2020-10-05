import { bubble } from "./bubble";

const randomNumber: (min: number) => (max: number) => number = (min) => (max) =>
  Math.floor(Math.random() * (max - min) + min);

const numbers: number[] = Array.from({ length: randomNumber(10)(50) }, () => randomNumber(0)(100));

console.log(numbers);

console.log(bubble(numbers));
