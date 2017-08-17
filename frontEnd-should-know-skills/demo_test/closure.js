const Person = (function() {
  let age = 18;
  return {
    getter: () => {
      return age;
    },
    setter: (newAge) => {
      if (typeof newAge === 'number') {
        age = newAge;
      }
    },
  };
}());

console.log(Person.getter());
Person.setter(20);
console.log(Person.getter());
