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
function cloneObject(target, source = {}) {
  for (const [key, value] of Object.entries(source)) {
    target[key] = value;
  }
  return target;
}

function calculateConfectioneryCosts(popStars) {
  const regex = /\d+/;
  const newArray = popStars.map((star) => {
    const currentYCS = star.yearlyCumulativeSpend;
    const currentCPI = star.purchaseToday.costPerItem;
    const yearlyCumulativeSpendNumber = Number(currentYCS.match(regex));
    const costPerItemNumber = Number(currentCPI.match(regex));
    const amountBoughtNumber = star.purchaseToday.amountBought;
    const newTotal =
      yearlyCumulativeSpendNumber + amountBoughtNumber * costPerItemNumber;
    return {
      name: star.name,
      yearlyCumulativeSpend: `£${newTotal}`,
    };
  });
  return newArray;
}

const test = [
  {
    name: "Beyonce Bowls",
    yearlyCumulativeSpend: "£44",
    purchaseToday: {
      item: "White mice",
      costPerItem: "£3",
      amountBought: 17,
    },
  },
];
calculateConfectioneryCosts(test);

module.exports = {
  removeLastNumber,
  raiseSalaries,
  updateTasks,
  cloneObject,
  calculateConfectioneryCosts,
};
