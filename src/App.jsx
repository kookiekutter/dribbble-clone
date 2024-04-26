import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/authpages/Signup";
import Login from "./Components/authpages/Login";
import Homepage from "./Homepage";
import Conpage from "./Components/Content/Conpage";
import Follow from "./Follow";
import Likes from "./Likes";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f8f7f4"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="/card/:id" element={<Conpage />} />
          <Route path="Follow" element={<Follow />} />
          <Route path="Likes" element={<Likes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
