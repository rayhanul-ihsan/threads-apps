import Home from "./pages/Home";
import Follows from "./pages/Follows";
import EditProfile from "./pages/EditProfile";
import DetailSearch from "./pages/Detail-Search";
import DetailStatus from "./pages/Detail-Status";
import DetailProfile from "./pages/Detail-Profile";
import Reply from "./features/reply/components/Reply";
import Profile from "./features/profile/components/Profile";
import LoginPage from "./features/auth/components/LoginPage";
import RegisterPage from "./features/auth/components/RegisterPage";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

function App() {
  function IsLogin() {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (!token) {
      return <Navigate to={"/login"} />;
    } else {
      return <Outlet />;
    }
  }

  function IsNotLogin() {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />; 
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<IsLogin />}>
          <Route path="/" element={<Home />} />
          <Route path="/reply" element={<Reply />} />
          <Route path="/Follows" element={<Follows />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<DetailSearch />} />
          <Route path="/status/:id" element={<DetailStatus />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/detail-profile" element={<DetailProfile />} />
          {/* <Route path="/detail-profile/:id" element={<ProfileFromSuggest/>}/>  */}
          <Route path="/detail-profile/:id" element={<DetailProfile />} />
        </Route>
        <Route path="/" element={<IsNotLogin />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
