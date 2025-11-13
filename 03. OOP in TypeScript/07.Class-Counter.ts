class Counter {
  private static count: number = 0;

  static increment() {
    this.count += 1;
  }

  static getCount() {
    return this.count;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount());

// Counter.count = 10;

