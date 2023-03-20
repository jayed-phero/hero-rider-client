import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LearnerRegistration from "../Pages/Registration/LearnerRegistration/LearnerRegistration";
import Registration from "../Pages/Registration/Registration";
import RiderRegistration from "../Pages/Registration/RiderRegistration/RiderRegistration";
import Signin from "../Pages/Registration/Signin";

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
    }
])