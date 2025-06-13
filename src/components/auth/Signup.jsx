import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../../firebase';
import { useState } from "react";
import { EmailRegex, PasswordRegex, FullNameRegex } from "./validation";

const Signup = ({ SwitchtoLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');

    // Handling error for invalid input value
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [fullnameError, setFullnameError] = useState(true);

    const HandleSignUp = () => {
        console.log(emailError, passwordError, fullnameError)
        if (emailError && passwordError && fullnameError) {
            console.log(email, password)
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert('could not singed you');
                });
        }
    }

    return (
        <div className="flex flex-col relative z-10 text-white bg-black-50 items-center mt-4">
            <h1 className="text-2xl text-3xl font-bold">Unlimited movies, TV shows and more</h1>

            {/* Sing up form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="flex flex-col gap-2 items-center w-8/12 bg-white/10 pt-5 pb-10 backdrop-blur-md mt-15 bg-white bg-opacity-90 backdrop-blur-sm shadow-2xl rounded-xl">

                <label className="font-bold mb-2">Email address</label>

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
                        setEmailError(EmailRegex.test(email));
                    }}
                    required
                />
                {!emailError &&
                    <p className="text-red-500 font-semibold">Invalid email</p>
                }

                <br />

                <label className="font-bold mb-2">Full name </label>

                <input type="text" className="rounded w-1/5 rounded-bl-sm font-bold border-2 border-blue-400 rounded-md px-4 py-2 
                ring-inset
                focus:placeholder:text-transparent
                focus:outline-none 
                transition-all duration-200 ease-in-out
                focus:outline-none 
                focus:border-white"
                    placeholder="Enter your full name"
                    value={fullname}
                    onChange={(e) => {
                        setFullname(e.target.value)
                        setFullnameError(FullNameRegex.test(fullname))
                    }}
                    required
                />
                {!fullnameError &&
                    <p className="text-red-500 font-semibold">Enter a valid name</p>
                }

                <br />

                <label className="font-bold mb-2">Create a Password </label>

                <input type="password" className="rounded w-1/5 rounded-bl-sm font-bold border-2 border-blue-400 rounded-md px-4 py-2 
                ring-inset
                focus:placeholder:text-transparent
                focus:outline-none 
                transition-all duration-200 ease-in-out
                focus:outline-none 
                focus:border-white"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(PasswordRegex.test(password))
                    }}
                    required
                />

                <p className="text-red-500 font-semibold">{(!passwordError) ? "Password must be at least 8 characters and include both uppercase and lowercase letters" : ""}</p>


                <Link
                    className="text-blue-500"
                    onClick={() => {
                        alert
                            (`
1 → Must contain at least one lowercase letter
2 → Must contain at least one uppercase letter
3 → Minimum length of 8 characters (any character allowed, including special ones)

✅ Valid Examples:
ReactJs@2024
Welcome123!
Test#Abcd
1Abcdefg@

❌ Invalid Examples:
password → No uppercase
PASSWORD → No lowercase
abc123 → Too short, no uppercase
                            `)
                    }}>Password policy</Link>
                <button
                    type="submit"
                    className="mt-10 cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
                    onClick={HandleSignUp}
                >Sign Up</button>
            </form>
            <Link onClick={SwitchtoLogin} className="hover:underline cursor-pointer">Already have an account</Link>
        </div>

    )
}

export default Signup;