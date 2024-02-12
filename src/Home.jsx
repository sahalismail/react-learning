import { useState } from "react";
import { Employee } from "./Employee";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const Home = () => {
  const userDetails = {
    name: "Sahal",
    age: 22,
    address: "Kochi, Kerala",
  };

  const country = "India";

  const [salary, setSalary] = useState(20000);

  // 'Props': data that is passed from parent to child component

  return (
    <main>
      <Header user={userDetails} country={country} />
      <MainContent user={userDetails} />
      <Employee
        name="Amal"
        salary={salary}
        setSalary={setSalary}
        employeeId="12345"
      />
    </main>
  );
};

// Header - Navigation, logo
// Body
// Footer
