import { Header } from "./Header";
import { MainContent } from "./MainContent";

export const Home = () => {
  const userDetails = {
    name: "Sahal",
    age: 22,
    address: "Kochi, Kerala",
  };

  const country = "India";

  // 'Props': data that is passed from parent to child component

  return (
    <main>
      <Header user={userDetails} country={country} />
      <MainContent user={userDetails} />
    </main>
  );
};

// Header - Navigation, logo
// Body
// Footer
