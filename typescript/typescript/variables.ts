/* Boolean */
let isDone: boolean = false;

/* Numbers */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/* Strings */
let color: string = 'blue';
color = 'red';

/* Arrays */
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/* Tuples */
let x: [string, number];
x = ['hello', 10];

/* Enum */
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

/* Any */
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

let listAny: any[] = [1, true, 'free'];

/* Object */
let person: {
  name: string;
  lastname: string;
  age?: number;
  fullname: () => void;
} = {
  name: 'Luis',
  lastname: 'Fernandez',
  fullname: function() {
    console.log(`${this.name} ${this.lastname}`);
  }
};
