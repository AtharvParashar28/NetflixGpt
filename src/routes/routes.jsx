import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Browse from '../components/Browse.jsx'
import Body from "../components/Body.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import PublicRoute from "./PublicRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: 
                <PublicRoute>
                    <Body />
                </PublicRoute>
            },
            {
                path: "/browse",
                element: 
                <ProtectedRoute>
                    <Browse />
                </ProtectedRoute>
            }
        ]
    }
])

export default router;