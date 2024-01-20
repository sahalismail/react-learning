import "./Header.css";
import { Navigation } from "./Navigation";

// Object destructuring in JS:
// const variableName = {age: 32, address: 'kerala'};
// variableName.age

// const {adress} = {age: 32, address: 'kerala'};

export const Header = ({ user, country }) => {
  return (
    <header>
      Welcome {user.name}! You are from {country}
      {/* Prop drilling */}
      <Navigation user={user} />
    </header>
  );
};
