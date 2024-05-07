import "./App.css";
import { Home } from "./Home";
import { Registration } from "./Registration";
import { UsersList } from "./UsersList";
import { ColorList } from "./ColorList";
import { Movie } from "./Movie";
// import { Movie } from "./Movie";

// 2 types of components in React:
// 1. Class components
// 2. functional components
function App() {
  return (
    <div className="App">
      {/* <ColorList /> */}
      <Movie />
    </div>
  );
}

export default App;
