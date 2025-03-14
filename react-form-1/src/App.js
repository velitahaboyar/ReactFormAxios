import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
