class Task {
  title: string;
  description: string;
  completed: boolean = false;
  private createdBy: string;

  constructor(title: string, description: string, createdBy: string) {
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
  }

  get createdByUser(): string {
    return this.createdBy;
  }

  set createdByUser(user: string) {
    this.createdBy = user;
  }

  toggleStatus(): void {
    this.completed = !this.completed;
  }

  getDetails(): string {
    return `Task: ${this.title} - ${this.description} - ${
      this.completed ? "Completed" : "Pending"
    }`;
  }

  static createSampleTasks(): Task[] {
    return [
      new Task("Learn TypeScript", "Study TypeScript Basics", "Pencho"),
      new Task("Create a Website", "Build a great app", "Gosho"),
    ];
  }
}

// const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
// task1.toggleStatus();
// console.log(task1.getDetails());

// const task2 = new Task("Clean room", "Clean the room", "Mary");
// console.log(task2.getDetails());

const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));


