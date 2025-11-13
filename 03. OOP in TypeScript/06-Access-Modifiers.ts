class Employee {
  //   public name: string;
  //   protected position: string;
  //   private salary: number;

  constructor(
    public name: string,
    protected position: string,
    private salary: number
  ) {
    // this.name = name;
    // this.position = position;
    // this.salary = salary;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }

  private getSalary() {
    return this.salary;
  }

  public showSalary() {
    return `Salary: $${this.getSalary()}`;
  }
}

const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary);
// console.log(emp.position);
