import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Search } from "./pages/Search";
import { NotFoundPage } from "./pages/pageNotFound";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
import { UserProfile } from "./pages/UserProfile";
import { ShowPost } from "./pages/ShowPost";
import { EditProfile } from "./pages/EditProfile";
import { NavigationMenu } from "./components/NavigationMenu";
import { NewPost } from "./pages/NewPost";

function App() {
  return (
    <main className="container">
      <Header />
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user/:userName" element={<UserProfile />} />
        <Route path="/post/:postId" element={<ShowPost />} />
        <Route path="/posting" element={<NewPost />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
