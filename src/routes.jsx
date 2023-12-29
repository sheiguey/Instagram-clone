import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";


const Router = ()=>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
    )
}

export default Router;