
import Profile from "./components/Profile"
import Home from "./pages/Home"

import { Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DetailStatus from "./pages/Detail-Status"
import Follows from "./pages/Follows"
import DetailSearch from "./pages/Detail-Search"
import DftrFollowers from "./components/dftrFollowers"


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
        {/* <Route path="/dftr-followers" element={<DftrFollowers/>}/> */}
      </Routes>
    </>
  )
}

export default App
