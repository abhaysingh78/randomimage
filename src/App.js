import "./App.css";
import Home from "./Home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search/Search";
function App() {
  return (
    <div className='App'>
      <Search />
      <Home />
    </div>
  );
}

export default App;
