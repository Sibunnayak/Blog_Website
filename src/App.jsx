import { Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import { Route } from "react-router-dom";
import UserAuthForm from "./pages/userAuthForm.page";
import Editor from "./pages/editor.pages";
import HomePage from "./pages/home.page";

const App = () => {
  return (
    // <h1>MERN Blogging website by modern web</h1>
    // <Navbar />
    <Routes>
      <Route path="/editor" element={<Editor />} />
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<UserAuthForm type="sign-in" />} />
        <Route path="signup" element={<UserAuthForm type="sign-up" />} />
      </Route>
    </Routes>
  );
};

export default App;
