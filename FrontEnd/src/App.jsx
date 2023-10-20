import './main.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./layout/Header"
import Home from "./pages/Home.jsx"
import Footer from "./layout/Footer"
import Signin from "./pages/Signin"
import User from "./pages/User"
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.user.token);
  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-In" element={<Signin />} />
      <Route path="/User" element={token ? <User /> : <Navigate to="/Sign-In" />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
