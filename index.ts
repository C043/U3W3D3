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

type stringOrNumber = string | number;

type Person = {
  name: string;
  surname: string;
  age: stringOrNumber;
};

type Developer = {
  languages: string[];
  favoriteLanguage?: string;
};

const mario: Person & Developer = {
  name: "Mario",
  surname: "Fragnito",
  age: "25",
  languages: ["HTML", "CSS", "SASS", "JavaScript", "TypeScript"],
};

console.log(mario);

interface PersonInterface {
  name: string;
  surname: string;
  age: stringOrNumber;
}

interface DeveloperInterface extends PersonInterface {
  languages: string[];
  favoriteLanguage?: string;
}

const roberto: DeveloperInterface = {
  name: "Roberto",
  surname: "Patrone",
  age: 32,
  languages: ["HTML", "TypeScript"],
};
console.log(roberto);
