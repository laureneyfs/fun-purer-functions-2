function removeLastNumber(arr) {
  const copyArr = [...arr];
  copyArr.pop();
  return copyArr;
}

function raiseSalaries(employees, percentage) {
  const salaryIncrease = employees.map((employee) => {
    employee.salary = Math.round((employee.salary / 100) * (100 + percentage));
    return employee;
  });

  return salaryIncrease;
}

function updateTasks(person, ...tasks) {
  const copyPerson = { ...person };
  if (!copyPerson.name) {
    return copyPerson;
  }
  copyPerson.tasks.push(...tasks);
  return copyPerson;
}
module.exports = { removeLastNumber, raiseSalaries, updateTasks };
