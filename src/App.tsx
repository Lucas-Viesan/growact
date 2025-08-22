import Landing from "./pages/landing/Landing";
import Footer from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[100vh]">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/perfil" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
