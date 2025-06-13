import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Browse = () => {
    // Navigation to other route
    const Navigate = useNavigate();

    // Subscribing to the store
    const Store = useSelector((state) => state.user);

    // Dispatching an action
    const dispatch = useDispatch();

    const HandleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successfully
            Navigate("/");
            alert("Successfully signed out");
        }).catch((error) => {
            // An error happened.
            alert("Error while sign you out");
        });
    }

    useEffect(() => {
        console.log(Store);
    },[])

    return (
        <>
            <h1 className="text-4xl text-blue-500">Browsing page</h1>
            <button onClick={HandleSignout} className="cursor-pointer">Sign out</button>
        </>
    )
}

export default Browse;