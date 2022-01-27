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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="/dashboard/addExperience"
              element={<AddExperience />}
            />
            <Route path="/dashboard/myExperience" element={<MyExperience />} />
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            <Route
              path="/dashboard/createBlogPost"
              element={<CreateBlogPost />}
            />
            <Route path="/dashboard/allBlogPosts" element={<AllBlogPosts />} />
            <Route path="/dashboard/updateBlog/:id" element={<UpdateBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
