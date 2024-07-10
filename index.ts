console.log("Hello World!");

const any: number = 69;

let whatever: string | boolean;

whatever = false;

//prova di commento

let newFunc: (x: number, y: number) => string;

const addition = (n1: number, n2: number): string => {
  return (n1 + n2).toString();
};

newFunc = addition;

console.log(newFunc(10, 20));
