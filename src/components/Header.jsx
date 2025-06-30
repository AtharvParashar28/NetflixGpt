import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {
    // Navigation to other route
    const Navigate = useNavigate();

    // Subscribing to the store
    const Store = useSelector((state) => state.movie);

    // Dispatching an action
    const dispatch = useDispatch();


    // Signout method
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

    return (
        <div className="flex justify-end items-center pr-6 h-16 absolute top-0 left-0 w-full z-30">
            <h3 className="text-2xl text-green-500">Welcome : {auth?.currentUser?.email}</h3>
            <button onClick={HandleSignout} className="cursor-pointer">Sign out</button>
        </div>
    )
}

export default Header;