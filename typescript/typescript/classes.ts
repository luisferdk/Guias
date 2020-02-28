class Vehicle {
  engine: string;
  doors: number[] = [];
  color: string = '';
  start: () => void;

  constructor(engine: string) {
    this.engine = engine;
    this.start = function(): void {
      console.log(`The ${this.engine} roars to life with a VROOM!`);
    };
  }
}
