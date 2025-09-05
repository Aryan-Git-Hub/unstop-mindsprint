// File: client/src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/users/Signup.jsx";
import Login from "./pages/users/Login.jsx";
import Logout from "./pages/users/Logout.jsx";
import { PrivateRoute, NotPrivateRoute } from "./components/PrivateRoute.jsx";
import Context from "./context/Context.jsx";
import Transport404 from "./pages/PageNotFound.jsx";

function App() {
  return (
    <div className="min-h-screen bg-lightgray">
      <BrowserRouter>
        <Context>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <Contact />
                </PrivateRoute>
              }
            />
            <Route
              path="/user-logout"
              element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              }
            />
            <Route
              path="/user-login"
              element={
                <NotPrivateRoute>
                  <Login />
                </NotPrivateRoute>
              }
            />
            <Route
              path="/user-signup"
              element={
                <NotPrivateRoute>
                  <Signup />
                </NotPrivateRoute>
              }
            />
            <Route path="*" element={<Transport404 />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
