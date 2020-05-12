// you will learn
// error compilations types

console.log('hello world');

// Types
// string
let myString: string;
myString = 'Hello' + 'World';
myString = myString.slice(0, 3);

// number
let myNum: number;
myNum = 22;

// boolean
let myBool: boolean;
myBool = false;

//any
let myVar: any;
myVar = false;

// arrays
let StringArray: string[];
StringArray = ['Hello', 'World'];

const numArray: number[] = [1, 2, 3];
const boolArray: boolean[] = [true, false, false];

// Tuple - an array with defined elements
let strNumTuple: [string, number];
strNumTuple = ['Hello', 7];

// void
let myVoid: void = undefined;
let myNull: null = null;
let myundefined: undefined = undefined;

// Functions

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(getSum(1, 4));

let myConcatenation = function(num1: string, num2: string): string {
  return num1 + num2;
};

let mySum = function(num1: number | string, num2: number | string): number {
  if (typeof num1 == 'string') {
    num1 = parseInt(num1);
  }
  if (typeof num2 == 'string') {
    num2 = parseInt(num2);
  }

  return num1 + num2;
};

// optional parameter
function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

// void function
function myVoidFunction(): void {
  return;
}

/**
 * Interfaces
 */

function showTodo(todo: { title: string; text: string }): void {
  console.log(`${todo.title} ${todo.text}`);
}

// definition interface
interface iTodo {
  title: string;
  text: string;
}

let myTodo: iTodo = { title: 'Eat Dinner', text: 'just remenber to eat' };

function todoFunction(todo: iTodo): void {
  console.log(todo);
}

/**
 * Classes - properties + methods
 * modifiers - to access to props and methods
 */
interface IUser {
  name: string;
  email: string;
  age: number;
  register: () => void;
  showmeAge: () => void;
  ageinYears?: () => void;
  payInvoice: () => void;
}

class User implements IUser {
  // you can add private, public, protected
  name: string;
  public email: string;
  public age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`user ${this.name}`);
  }

  public register() {
    console.log(`${this.name} is now registered`);
  }

  public showmeAge() {
    return this.age;
  }

  private AgeinYears() {
    return this.age + ' years';
  }

  payInvoice() {
    console.log(`${this.name} is now registered`);
  }
}

// inheritance
class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let john = new User('Joe MacMillan', 'joe@gmail.com', 45);
let gordon = new Member(1, 'Clark', 'gordon@gmail.com', 40);

const result = mySum('2', '2');
console.log(result);
