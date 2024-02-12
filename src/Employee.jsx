import { useEffect, useState } from "react";

export const Employee = ({ name, salary, employeeId, setSalary }) => {
  // Object destructuring
  // const testObj = {
  //   username: "Amal",
  //   age: 30,
  // };
  // const { age } = testObj;
  // console.log(age);

  // const [salary, setSalary] = useState(20000);
  // const [employeeId, setEmployeeId] = useState("12345");
  // const [name, setName] = useState("Amal");

  const increment = () => {
    setSalary(salary + 500);
  };

  // mounting
  // useEffect(function, dependency array)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // updation
  useEffect(() => {
    console.log("Salary incremented: ", salary);
  }, [salary]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Employee name: {name}</p>
      <p>Salary: {salary}</p>
      <p>Employee ID: {employeeId}</p>
    </div>
  );
};

// Variables in a component
// State in a component
// Props
