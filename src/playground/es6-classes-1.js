class Person {
  constructor(name = 'Anonimous', age = 0) {
    this.name = name;
    this.age = age
  }
  getGretting() {
    return `Hi! I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = description + ` The major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGretting() {
    let gretting = super.getGretting();
    if (this.homeLocation) {
      gretting = gretting + ` I am from ${this.homeLocation}.`;
    }
    return gretting;
  }
}

const me = new Traveler('Natalia', 34, 'Tomsk');
console.log(me.getGretting());

const other = new Traveler('Tom', 29);
console.log(other.getGretting());



