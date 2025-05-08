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
function cloneObject(target, source) {
  const sourceEntries = Object.entries(source);
  for (let i = 0; i < sourceEntries.length; i++) {
    const sourceKeyEntry = sourceEntries[i][0];
    console.log(target[sourceKeyEntry]);
    if (target[sourceKeyEntry]) {
      delete target[keyEntry];
    }
  }
  return target;
}
// const sourceValueEntry = sourceEntries[i][1]
module.exports = { removeLastNumber, raiseSalaries, updateTasks, cloneObject };
