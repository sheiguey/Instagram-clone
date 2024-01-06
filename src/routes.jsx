import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUp from "./components/AuthForm/SignUp";
import Login from "./components/AuthForm/Login";


const Router = ()=>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<AuthPage/>}>
                
            </Route>
            <Route path="/:username" element={<ProfilePage/>}/>
        </Routes>
    )
}

export default Router;