import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
    const [NewUser , setNewUser] = useState(false);
    // If a new user enters the site -> take him to signup page 
    // Otherwise render Login page

    return (
        <div>
            {
                (!NewUser) 
                ?
                <Login SwitchtoSignup={() => setNewUser(true)}/>
                :
                <Signup SwitchtoLogin={() => setNewUser(false)}/>
            }
        </div>
    )
}

export default Auth;