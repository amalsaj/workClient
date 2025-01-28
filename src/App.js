import "./App.css";
import ItemCreationForm from "./components/Create";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-full w-full">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<ItemCreationForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
