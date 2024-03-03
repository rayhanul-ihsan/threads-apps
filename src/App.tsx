import Home from "./pages/Home";

import Follows from "./pages/Follows";
import EditProfile from "./pages/EditProfile";
import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import DetailSearch from "./pages/Detail-Search";
import DetailStatus from "./pages/Detail-Status";
import DetailProfile from "./pages/Detail-Profile";
import Reply from "./future/reply/components/Reply";
import Profile from "./future/profile/components/Profile";
import LoginPage from "./future/auth/components/LoginPage";
import RegisterPage from "./future/auth/components/RegisterPage";
import ProfileFromSuggest from "./future/profile/components/ProfileFromSuggest";
import { API, setAuthToken } from "./libs/api";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";
import React from "react";
import { RootState } from "./stores/types/rootState";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  async function checkAuth() {
    try {
      setAuthToken(localStorage.token);

      const response = await API.get("/auth/check");
      console.log(response);
      dispatch(AUTH_CHECK(response.data));
      setIsLoading(false);
    } catch (error) {
      dispatch(AUTH_ERROR());
      setIsLoading(false);
      navigate("/login");
    }
  }


  React.useEffect(() => {
    if (localStorage.token) {
      checkAuth();
    } else {
      setIsLoading(false);
    }
  }, []);

  function IsLogin() {
    if (!localStorage.token) {
      return <Navigate to={"/login"} />;
    } else {
      return <Outlet />;
    }
  }

  function IsNotLogin() {
    if (localStorage.token) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      {isLoading ? null : (
        <Routes>
          {/* <Route path="/" element={<IsLogin />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/reply" element={<Reply />} />
            <Route path="/Follows" element={<Follows />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<DetailSearch />} />
            <Route path="/status" element={<DetailStatus />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/detail-profile" element={<DetailProfile />} />
            {/* <Route path="/detail-profile/:id" element={<ProfileFromSuggest/>}/>  */}
            <Route path="/detail-profile/:id" element={<DetailProfile />} />
          {/* </Route> */}
          <Route path="/" element={<IsNotLogin />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
