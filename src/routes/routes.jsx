import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Browse from '../components/Browse.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
    },
    {
        path:"/browse",
        element:<Browse />
    },
])

export default router;