
import Profile from "./components/Profile"
import Home from "./pages/Home"

import { Routes, Route} from 'react-router-dom'
import LoginPage from "./auth/components/LoginPage"
import RegisterPage from "./auth/components/RegisterPage"
import DetailStatus from "./pages/Detail-Status"
import Follows from "./pages/Follows"
import DetailSearch from "./pages/Detail-Search"
import Reply from "./components/Reply"
import DetailProfile from "./pages/Detail-Profile"
import EditProfile from "./pages/EditProfile"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/status" element={<DetailStatus/>}/>
        <Route path="/Follows" element={<Follows/>}/>
        <Route path="/search" element={<DetailSearch/>}/> 
        <Route path="/reply" element={<Reply/>}/> 
        <Route path="/detail-profile" element={<DetailProfile/>}/> 
        <Route path="/edit-profile" element={<EditProfile/>}/> 
        {/* <Route path="/dftr-followers" element={<DftrFollowers/>}/> */}
      </Routes>
    </>
  )
}

export default App
