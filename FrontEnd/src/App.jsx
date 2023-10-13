import './main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./layout/Header"
import Home from "./pages/Home.jsx"
import Footer from "./layout/Footer"
import Signin from "./pages/Signin"
import User from "./pages/User"

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
