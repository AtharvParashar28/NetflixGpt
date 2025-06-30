import { useEffect } from "react";
import Body from "./components/Body.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js"
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice.js";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function App() {
 
  // Dispatching an action
  const dispatch = useDispatch();

  // subscribing to the store
  const Store = useSelector((state) => state.user);

  // Navigating routes
  const navigate = useNavigate();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Signup / Login
      if (user) {
        console.log("User in store ", Store);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      }
      // Signout
      else {
        dispatch(removeUser());
        navigate("/");
      }
    })

    return () => unsubscribe();
  }, [dispatch])

  useEffect(() => {
    console.log('Current user',auth.currentUser);
  })

  return (
  <Outlet />
  )

}

export default App;
