import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function App() {
  const { authUser } = useContext(AuthContext);
  return (
    <>
      <div className="bg-[url('/bgImage.svg')] bg-cover bg-no-repeat bg-center">
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
