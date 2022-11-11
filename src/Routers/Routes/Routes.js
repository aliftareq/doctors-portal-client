import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/AuthenticationPages/LoginPage/Login";
import Register from "../../Pages/AuthenticationPages/RegisterPage/Register";
import Home from "../../Pages/HomePage/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])