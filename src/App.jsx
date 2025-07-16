import Home from "./pages/Home";
import Collections from "./pages/Collections";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
    </Routes>
  );
}

export default App;
