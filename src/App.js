import "./App.css";
import { Home } from "./Home";
import { Registration } from "./Registration";
import { UsersList } from "./UsersList";

// 2 types of components in React:
// 1. Class components
// 2. functional components
function App() {
  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
