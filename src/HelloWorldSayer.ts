class HelloWorldSayer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    return `${this.name} says, "Hello World!"`;
  }
}

export default HelloWorldSayer;
