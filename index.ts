console.log("Hello World!");

const any: number = 69;

let whatever: string | boolean;

whatever = false;

//prova di commento

type newFunc = (x: number, y: number) => string;

const addition: newFunc = (n1: number, n2: number): string => {
  return (n1 + n2).toString();
};

/* newFunc = addition;*/

console.log(addition(10, 20));

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

let str: string;
interface DeveloperInterface<type> extends PersonInterface {
  languages: type[];
  favoriteLanguage?: type;
}

const roberto: DeveloperInterface<typeof str> = {
  name: "Roberto",
  surname: "Patrone",
  age: 32,
  languages: ["HTML", "TypeScript"],
  favoriteLanguage: "CSS",
};

console.log(roberto);

type custom<type> = {
  name: type;
};

const nome: custom<string> = {
  name: "Custom",
};
