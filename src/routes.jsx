import {Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import useAuthStore from "./store/auhStore";



const Router = ()=>{
    const authUser = useAuthStore((state)=>state.user);
    return(
        <Routes>
            <Route path='/' element={authUser?<HomePage/>:<Navigate to='/auth'/> } />
            <Route path='/auth' element={!authUser? <AuthPage/>: <Navigate to='/'/> } />
            <Route path="/:username" element={<ProfilePage/>}/>
        </Routes>
    )
}

export default Router;