//clase, interfete, access modifiers
interface ICar {
  speedUp: (time: number) => void;
  speedDown: (time: number) => number;
}

interface IFastCar extends ICar {
  speedUpFast: (time: number) => void;
  speedDownFast: (time: number) => number;
}

export class Car implements IFastCar {
  public color: string;
  readonly shape: string;
  private speed: number = 0;
  protected gear: string = "mechanic"; //accesibila la parinti-copii

  constructor(color: string, shape: string) {
    this.color = color;
    this.shape = shape;
  }

  getSpeed() {
    return this.speed.toString();
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  speedUp = (time: number) => {
    this.speed *= time;
  };

  speedDown = (time: number) => {
    this.speed /= time;
    return this.speed;
  };

  speedUpFast = (time: number) => {
    this.speed = this.speed * (time + time);
  };

  speedDownFast = (time: number) => {
    this.speed = this.speed / (time + time);
    return this.speed;
  };

  getGear() {
    return this.gear;
  }

  setGear(gear: string) {
    this.gear = gear;
  }
}

let car = new Car("green", "hatchback");
console.log(car.color);
console.log(car.shape); //only readonly
//console.log(car.speed); //cannot do
console.log(car.getSpeed());

export default class FastestCar extends Car {
  constructor(color: string, shape: string) {
    super(color, shape);
  }

  //override
  getGear() {
    return this.gear + "5 viteze";
  }
}

console.log(car.getGear());
console.log(new FastestCar("black", "sedan").getGear());

//export,export default, import - din proiect sa arat
//default e doar unul
//named export poti avea mai multe exporturi in file, poti folosi alias
//se inchid in { }

//or syntax
type eyesColor = "blue" | "green" | "brown";
let eyeColor: eyesColor = "brown";

type Name = {
  lastName: string;
  firstName: string;
};

type DateBirth = {
  day: number;
  month: number;
  year: number;
};

//all fields are required for &
type Me = Name & DateBirth & { eyesColor: eyesColor };
let me: Me = {
  lastName: "Florescu",
  firstName: "Victor",
  day: 21,
  month: 2,
  year: 2001,
  eyesColor: "brown",
};

type Him = Name | DateBirth;
let him: Him = {
  day: 10,
  month: 2,
  year: 2000,
  lastName: "Al",
};

//basic types
function printBasicType(value: number | boolean | string) {
  if (typeof value === "number") {
    console.log(value.toString());
  }
  if (typeof value === "string") {
    console.log(value.charAt(1));
  } else {
    console.log(value.toString());
  }
}

//arrays
const array1: string[] = ["a", "b", "c"];
const array2: Array<string> = ["a", "b", "c"];

//tuples
type tuple = number | string | boolean;
const exTuple: tuple[] = [14, "a", true];

//enum
enum CarType {
  Sedan = 1,
  Cabriolet,
  Coupe,
  Pickup,
}

console.log(CarType);

//unknown
let unknownEx: unknown = { id: 1, field: "some field" };

//verificam daca e object obiectul, daca nu e null si daca cheia exista in obiect
function hasKey(obj: unknown, key: string) {
  return typeof obj === "object" && obj !== null && key in obj;
}

if (hasKey(unknownEx, "id")) {
  console.log(unknownEx);
}

//never nu va returna nimic pana la urma
function throwError(message: string): never {
  throw new Error(message);
}

//daca nu exista obiectul, arunca eroare noua
//returneaza asserts obiectul ii T
function assertObj<T>(obj?: T): asserts obj is T {
  if (!obj) {
    throw new Error("Object is undefined");
  }
}

//object - orice care nu-s primitive
function testObject(obj?: Name) {
  assertObj<Name>(obj);
  console.log(obj.firstName + " " + obj.lastName);
}

testObject({ lastName: "Victor", firstName: "Florescu" });
//testObject(); va arunca eventual eroare deoarece e null

//this lucreaza dupa context
const exObject = {
  name: "Victor",
  lastName: "Florescu",
  printName() {
    console.log(`name = ${this.name}, lastName: ${this.lastName}`);
  },
};

//ii dam un context cu bind ca sa poata gasi this.name
//ii dam ca context obiectul sine insusi
//da acolo deja alt obiect
let printName1 = exObject.printName.bind(exObject);
//daca nu indicam alte fielduri, ele vor fi undefined
let printName2 = exObject.printName.bind({ name: "another" });

console.log(exObject.printName());
console.log(printName1());
console.log(printName2());

function add(a: number, b: number): void;
function add(a: string, b: string): void;
function add(a: any, b: any): void {
  console.log(a + b);
}

add(5, 2);
add("5", "2");

//genericul extinde length, adica va avea length
function printLength<T extends { length: number }>(obj: T) {
  console.log(obj.length);
}
printLength([1, 2, 3]); //va printa length la array
printLength("aaaaaaa"); //va printa length la string

//va scoate un anumit field din obiect care este cerut
function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}
const objVal = {
  name: "123",
  lastName: "Florescu"
};
console.log(getValue(objVal, "lastName"));

interface Cat {
  name: string;
  color: string;
  age: number;
}

let cats: Cat[] = [
  {
    name: "Jerry",
    color: "gray",
    age: 2
  },
  {
    name: "Tom",
    color: "white",
    age: 3
  },
  {
    name: "Stiopa",
    color: "black",
    age: 1
  }
]

function mapAllKeys<T>(array: T[], key: keyof T){
  array.forEach(element => {
    console.log(element[key]);
  });
}

mapAllKeys<Cat>(cats, "name");

function interf<T>(value: T): T {
  return value;
}

let resNum = interf(1);
let res = interf<string>("1");