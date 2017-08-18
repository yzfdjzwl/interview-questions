const Person = {
  name: 'yuzf',
  sayName: () => {
    console.log(this.name);
  },
};

const Person2 = {
  name: 'hey',
  sayName: function() {
    console.log(this.name);
  },
};

Person.sayName();
Person2.sayName();
