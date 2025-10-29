function summrizePerson(
  id: number,
  fName: string,
  lName: string,
  age: number,
  mName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
): [number, string, number, string, string] {
  const fullName = mName ? `${fName} ${mName} ${lName}` : `${fName} ${lName}`;
  const personHobbies =
    hobbies && hobbies.length > 0 ? hobbies.join(", ") : "-";
  const positionAndSalary = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : "-";

  return [id, fullName, age, personHobbies, positionAndSalary];
}


console.log(summrizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
console.log(summrizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))
console.log(summrizePerson(21, 'Joseph', 'Angler', 28))
console.log(summrizePerson(21, 'Kristine', 'Neva', 23, ''))