import bgImage from "../utils/pexels-pavel-danilyuk-7234386.jpg"
import bgImage2 from "../utils/3d-rendering-cinema-movie-theater.jpg"
import Auth from "./auth/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

  // Dispatching an action
  const dispatch = useDispatch();

  // subscribing to the store
  const Store = useSelector((state) => state.user);

  useEffect(() => {
    console.log("redux store :- ", Store)
    onAuthStateChanged(auth, (user) => {
      // Signup / Login
      if (user) {
        console.log("Authentication update ", user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      }
      // Singout
      else {
        dispatch(removeUser());
      }
    })
  }, [])

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* background Image */}
        <img src={bgImage2} alt="background image" className="absolute top-0 left-0 object-cover z-0" />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        {/* All the content must written below img in the second div otherwise it will get hide behind the image */}

        {/* header and sign in form */}
        <div className="relative z-10 text-white">
          <Auth />
        </div>
      </div>
    </>
  )
}

export default Body;