import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmailRegex, PasswordRegex } from "./validation";
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ SwitchtoSignup }) => {
    // testing redux store
    const store = useSelector((state) => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Navigation
    const Navigate = useNavigate();

    // Handling error for invalid input value
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Dispatch
    const dispatch = useDispatch();

    // Sign-in
    const HandleSignin = (e) => {
        e.preventDefault();
        if ((!emailError && !passwordError) && (email.length !== 0 && password.length !== 0)) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // Navigate('/browse');
                })
                .catch((error) => {
                    // Error
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    alert("could not sign you in");
                });
        }
    }


    return (
        <div className="flex flex-col relative z-10 text-white bg-black-50 items-center mt-4">
            <h1 className="text-2xl text-3xl font-bold">Unlimited movies, TV shows and more</h1>

            {/* Login form */}
            <form
                className="flex flex-col gap-5 items-center w-8/12 bg-white/10 pt-5 pb-10 backdrop-blur-md mt-15 bg-white bg-opacity-90 backdrop-blur-sm shadow-2xl rounded-xl">

                <label className="font-bold mb-2 mt-5">Email Address </label>

                <input type="email" className="rounded w-1/5 rounded-bl-sm font-bold border-2 border-blue-400 rounded-md px-4 py-2
                        ring-inset
                        focus:placeholder:text-transparent
                        focus:outline-none 
                        transition-all duration-200 ease-in-out
                        focus:outline-none 
                        focus:border-white"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError(!EmailRegex.test(email));
                    }}
                    required
                />
                {emailError &&
                    <p className="text-red-500 font-semibold">Invalid Error</p>
                }

                <br />

                <label className="font-bold mb-2">Password </label>

                <input type="password" className="rounded w-1/5 rounded-bl-sm font-bold border-2 border-blue-400 rounded-md px-4 py-2 
                        ring-inset
                        focus:placeholder:text-transparent
                        focus:outline-none 
                        transition-all duration-200 ease-in-out
                        focus:outline-none 
                        focus:border-white"
                    placeholder="Enter your Email"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(!PasswordRegex.test(password));
                    }}
                    required
                />
                <p className="text-red-500 font-semibold">{(passwordError) ? "Password must be at least 8 characters and include both uppercase and lowercase letters" : ""}</p>

                <button
                    type="submit"
                    className="mt-10 cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200 "
                    onClick={HandleSignin}
                >Log in</button>
            </form>
            <Link onClick={SwitchtoSignup} className="hover:underline cursor-pointer">New user?</Link>
        </div>
    )
}

export default Login;