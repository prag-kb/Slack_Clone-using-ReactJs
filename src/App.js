import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app_body">
        <Sidebar />
        {/* react router -> chat screen */}
      </div>

      {/* "TODO"
     ReactJs
     Google user auth
     react Context API
     Material UI
     css variables
     react router 
     flexbox */}
    </div>
  );
}

export default App;
