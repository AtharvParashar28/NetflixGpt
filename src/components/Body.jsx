import Header from "./Header.jsx";
import Login from "./Login.jsx";
import bgImage from "../utils/pexels-pavel-danilyuk-7234386.jpg"

const Body = () => {

    return (
        <>
          <div className="relative w-full h-screen overflow-hidden">
            {/* background Image */}
            {/* <img src={bgImage} alt="background image" className="absolute top-0 left-0 w-full h-full object-cover brightness -50 -z-10" /> */}

            {/* header and sign in form */}
            <div className="relative z-10 text-white">
                <Header />
                <div className="mt-10">
                    <Login />
                </div>
            </div>
          </div>
        </>
    )
}

export default Body;