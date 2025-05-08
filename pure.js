function removeLastNumber(arr) {
  const copyArr = [...arr];
  copyArr.pop();
  return copyArr;
}

function raiseSalaries(employees, percentage){
    const salaryIncrease = employees.map((employee) => {
      
      employee.salary = Math.round((employee.salary / 100) * (100 + percentage)); 
      return employee
    })
    
    return salaryIncrease;
}
module.exports = {removeLastNumber, raiseSalaries};