import { Component, useState } from "react";

// class component
class Greeting extends Component {
  render() {
    return <h1>Happy new year!</h1>;
  }
}

// functional component
function Welcome() {
  // state in react
  // whenever state changes, DOM gets re-rendered

  const [name, setName] = useState("Amal"); // hooks
  const [showGreeting, setShowGreeting] = useState(true);

  function toggleGreeting() {
    setShowGreeting(!showGreeting);
  }

  function handleClick() {
    setName("Sahal");
  }

  return (
    <div id="title">
      <span>Welcome {name}!</span>
      <button onClick={handleClick}>Click me</button>
      <button onClick={toggleGreeting}>Toggle</button>
      {/* conditional rendering */}
      {showGreeting && <Greeting />}
    </div>
  );
}
// How to do in JS?

// 1. element has to have an ID/class
// 2. Read element using getElementById or querySelector
// 3. Read existing text from element
// 4. Append name variable to text
// 5. Replace contents of element with new value

// fragment <> </>

// lifecycles
// 1. mounting
// 2. updation
// 3. unmounting or destroy

export default Welcome;
