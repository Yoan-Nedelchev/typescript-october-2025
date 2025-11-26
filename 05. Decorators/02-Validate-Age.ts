function validateAge(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.set;

  descriptor.set = function (newVal: number) {
    if (newVal < 1 || newVal > 200) {
      throw new Error("Error: Age must be between 1 and 200");
    }
    original?.call(this, newVal);
  };

  return descriptor;
}

class Age {
  private _age!: number;
  constructor(age: number) {
    this.age = age;
  }
  @validateAge
  set age(val: number) {
    this._age = val;
  }
  get age() {
    return this._age;
  }
}

let ageVal = new Age(10);
ageVal.age = 20;

