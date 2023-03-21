import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import AllUsers from "../Pages/Dashboard/Users/AllUsers";
import Courses from "../Pages/Home/Courses/Courses";
import Home from "../Pages/Home/Home/Home";
import EnrollNow from "../Pages/Payment/EnrollNow";
import LearnerRegistration from "../Pages/Registration/LearnerRegistration/LearnerRegistration";
import Registration from "../Pages/Registration/Registration";
import RiderRegistration from "../Pages/Registration/RiderRegistration/RiderRegistration";
import Signin from "../Pages/Registration/Signin";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";

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
            },
            {
                path: 'profile',
                element: <UserProfile />
            },
            {
                path: 'courses',
                element: <Courses />
            },
            {
                path: 'enrollnow',
                element: <PrivateRoutes><EnrollNow /></PrivateRoutes> 
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute><DashboardLayout /></AdminRoute>,
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