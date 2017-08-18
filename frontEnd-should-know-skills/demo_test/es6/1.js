class App {
  constructor(name) {
    this.name = name;
  }

  sayName = () => {
    console.log(this);
  }
}

const app = new App('iphone');
app.sayName();
