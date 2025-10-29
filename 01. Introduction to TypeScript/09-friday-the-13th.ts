function fridayThe13th(param: unknown[]): void {
  enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
  }

  param.forEach((el) => {
    if (el instanceof Date && el.getDay() === 5 && el.getDate() === 13) {
      console.log(
        `${el.getDate()}-${Month[el.getMonth()]}-${el.getFullYear()}`
      );
    }
  });
}

fridayThe13th([
  {},
  new Date(2025, 4, 13),
  null,
  new Date(2025, 5, 13),
  "13-09-2023",
  new Date(2025, 6, 13),
]);

fridayThe13th([
  new Date(2024, 0, 13),
  new Date(2024, 1, 13),
  new Date(2024, 2, 13),
  new Date(2024, 3, 13),
  new Date(2024, 4, 13),
  new Date(2024, 5, 13),
  new Date(2024, 6, 13),
  new Date(2024, 7, 13),
  new Date(2024, 8, 13),
  new Date(2024, 9, 13),
  new Date(2024, 10, 13),
  new Date(2024, 11, 13),
]);
