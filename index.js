import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "../pages/profile"
import Home from "../pages/home";
import Login from "../pages/login";
import AppLayout from "../Components/Layout";


function AppRouter() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>} />
                <Route
                    path="/home"
                    element={
                        <AppLayout>
                          <Home></Home>
                        </AppLayout>} />
                <Route
                    path="/profile"
                    element={
                        <AppLayout>
                            <Profile></Profile>
                        </AppLayout>} />

            </Routes>
        </BrowserRouter>

    )
}


export default AppRouter;