import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/AppointmentPage/Appointment/Appointment";
import Login from "../../Pages/AuthenticationPages/LoginPage/Login";
import Register from "../../Pages/AuthenticationPages/RegisterPage/Register";
import DashBoard from "../../Pages/DashBoardPage/DashBoard/DashBoard";
import Home from "../../Pages/HomePage/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
    }
])