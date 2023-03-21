import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AllUsers from "../Pages/Dashboard/Users/AllUsers";
import Home from "../Pages/Home/Home/Home";
import LearnerRegistration from "../Pages/Registration/LearnerRegistration/LearnerRegistration";
import Registration from "../Pages/Registration/Registration";
import RiderRegistration from "../Pages/Registration/RiderRegistration/RiderRegistration";
import Signin from "../Pages/Registration/Signin";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'signin',
                element: <Signin />
            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'ridersignup',
                element: <RiderRegistration />
            },
            {
                path: 'learnersignup',
                element: <LearnerRegistration />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute><DashboardLayout /></AdminRoute> ,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: '/dashboard/all-users',
                element: <AllUsers />
            }
        ]
    }
])