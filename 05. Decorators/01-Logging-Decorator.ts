function log(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: string[]) {
    console.log(
      `Function ${methodName} called with arguments: ${args.join(", ")}`
    );
    return original.apply(this, args);
  };
  
  return descriptor;
}

class Person {
  fName: string;
  lName: string;

  constructor(fName: string, lName: string) {
    this.fName = fName;
    this.lName = lName;
  }

  @log
  static getFullName(fName: string, lName: string) {
    return `${fName}, ${lName}`;
  }
}

let person = new Person("John", "Does");
Person.getFullName(person.fName, person.lName);
Person.getFullName("Benny", "Tres");
