import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Browse from '../components/Browse.jsx'
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
    },
    {
        path:"/browse",
        element:
        <Provider store={appStore}><Browse /></Provider>

    },
])

export default router;