import "./App.css";
import { Home } from "./Home";
import { Registration } from "./Registration";

// 2 types of components in React:
// 1. Class components
// 2. functional components
function App() {
  return (
    <div className="App">
      <Registration />
    </div>
  );
}

export default App;
