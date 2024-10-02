// Create an object for employees
export default function createEmployeesObject(departmentName, employees) {
  return {
    [`${departmentName}`]: employees,
  };
}
