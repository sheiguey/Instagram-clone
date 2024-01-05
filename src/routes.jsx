import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";


const Router = ()=>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path="/:username" element={<ProfilePage/>}/>
        </Routes>
    )
}

export default Router;