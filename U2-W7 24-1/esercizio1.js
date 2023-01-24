class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static confrontoTraP(x, y) {
    if (x.age > y.age) {
      return `${x.name}, avente ${x.age} anni, è più vecchio di ${y.name}, avente ${y.age} anni`;
    } else {
      return `${y.name}, avente ${y.age} anni, è più vecchio di ${x.name}, avente ${x.age} anni`;
    }
  }
}

let p1 = new Person("Legolas", 35);
let p2 = new Person("Frodo", 24);
let p3 = new Person("Gandalf", 90);

console.log(Person.confrontoTraP(p1, p3));
