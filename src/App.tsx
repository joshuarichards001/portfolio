import { Route, Routes } from "react-router";
import Home from "./Home";
import Personal from "./Personal";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/personal" element={<Personal/>} />
      </Routes>
    </main>
  );
}

export default App;