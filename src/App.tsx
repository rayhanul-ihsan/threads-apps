
import Home from "./pages/Home"

import Follows from "./pages/Follows"
import EditProfile from "./pages/EditProfile"
import { Routes, Route} from 'react-router-dom'
import DetailSearch from "./pages/Detail-Search"
import DetailStatus from "./pages/Detail-Status"
import DetailProfile from "./pages/Detail-Profile"
import Reply from "./future/reply/components/Reply"
import Profile from "./future/profile/components/Profile"
import LoginPage from "./future/auth/components/LoginPage"
import RegisterPage from "./future/auth/components/RegisterPage"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reply" element={<Reply/>}/> 
        <Route path="/Follows" element={<Follows/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/search" element={<DetailSearch/>}/> 
        <Route path="/status" element={<DetailStatus/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/edit-profile" element={<EditProfile/>}/> 
        <Route path="/detail-profile" element={<DetailProfile/>}/> 
      </Routes>
    </>
  )
}

export default App
