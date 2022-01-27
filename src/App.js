import "./App.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBlogDetails from "./pages/Home/BlogPage/SingleBlogDetails";
import AuthProvider from "./Context/AuthProvider";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AddExperience from "./pages/Dashboard/AddExperience/AddExperience";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyExperience from "./pages/Dashboard/MyExperience/MyExperience";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import CreateBlogPost from "./pages/Dashboard/CreateBlogPost/CreateBlogPost";
import AllBlogPosts from "./pages/Dashboard/AllBlogPosts/AllBlogPosts";
import UpdateBlog from "./pages/Dashboard/UpdateBlog/UpdateBlog";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Explore from "./pages/Explore/Explore";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/blog/:id"
            element={
              <PrivateRoute>
                <SingleBlogDetails />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard/addExperience"
              element={
                <PrivateRoute>
                  <AddExperience />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/myExperience"
              element={
                <PrivateRoute>
                  <MyExperience />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/makeAdmin"
              element={
                <PrivateRoute>
                  <MakeAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/createBlogPost"
              element={
                <PrivateRoute>
                  <CreateBlogPost />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/allBlogPosts"
              element={
                <PrivateRoute>
                  <AllBlogPosts />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/updateBlog/:id"
              element={
                <PrivateRoute>
                  <UpdateBlog />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
