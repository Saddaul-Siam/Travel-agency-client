import "./App.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBlogDetails from "./pages/Home/BlogPage/SingleBlogDetails";
import AuthProvider from "./Context/AuthProvider";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import AddExperience from "./pages/Dashboard/AddExperience/AddExperience";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog/:id" element={<SingleBlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/addExperience"
            element={
              <PrivateRoute>
                <AddExperience />
              </PrivateRoute>
            }
          />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/addExperience" element={<AddExperience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
