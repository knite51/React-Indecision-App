class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi My name is ${this.name}`;
  }
  getDescription(){
    return `Mr. ${this.name} is ${this.age} year(s) old!`
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location) {
      return `${greeting}. I am from ${this.location}`;
    }
    return greeting;
  }
}



const Ayotunde = new Person('Ayotunde', 23);
console.log(Ayotunde.getDescription());

const traveller = new Traveller('Thomas', 42, 'Lagos');
console.log(traveller.getGreeting());
console.log(traveller.getDescription());




// logical not
// !'' = true
// !!'' = false
// !!'Ayo' = ture
// !!undefined = false