import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from "./pages/SignUp";
import About from './pages/About';
import SignIn from "./pages/SignIn";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/sign-in" element= {<SignIn />} />
      <Route path="/sign-up" element= {<SignUp />} />
      <Route path="/profil" element= {<Profile />} />
      <Route path="/about" element= {<About />} />
    </Routes>
  </BrowserRouter>
}
