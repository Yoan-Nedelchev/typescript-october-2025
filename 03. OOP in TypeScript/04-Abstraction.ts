// interface Animal {
//   makeSound(): string;
// }

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof";
  }
}

const dog = new Dog();
console.log(dog.makeSound());
