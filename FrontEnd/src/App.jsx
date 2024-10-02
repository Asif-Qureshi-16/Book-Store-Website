import Home from "./Home/Home";
import Course from "./Home/Course";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
