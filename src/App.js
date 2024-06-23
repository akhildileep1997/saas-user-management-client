import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useSelector((store) => store.user);

  return (
    <>
      <Header />
      <div
        style={{ minHeight: "87vh" }}
        className="App p-4  flex  justify-center items-center bg-slate-200 "
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
