import './main.css';
import { Routes, Route } from "react-router-dom"
import Header from "./layout/Header"
import Home from "./pages/Home/Home.jsx"
import Footer from "./layout/Footer"
import Signin from "./pages/Signin/Signin"
import User from "./pages/User/User"

function App() {
  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-In" element={<Signin />} />
      <Route path="/User" element={<User />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App