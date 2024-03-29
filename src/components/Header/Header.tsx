import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/instagram.png";

const Header = () => {
  const reload = () => {
    window.location.reload();
  };
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="bg-neutral-800 w-full min-h-14 flex justify-around  sm:justify-around sm:grid sm:grid-cols-3">
        <div className="flex items-center">
          <button
            className="flex items-center justify-center px-4 bg-neutral-800 text-white rounded-md mx-9 sm:mx-0"
            onClick={reload}
          >
            <img src={headerLogo} alt="Logo" className="h-8 w-8 mr-2" />
          </button>
          <p className="text-white font-bold cursor-pointer transition-colors duration-300 hover:text-green-500">
            AMIGO
          </p>
        </div>

        <div className="hidden sm:flex justify-around flex-1">
          <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            Home
          </p>
          <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            About us
          </p>
          <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            Contact
          </p>
        </div>
        <div className="hidden sm:flex justify-around">
          {/* <p className="text-white font-semibold mt-3 cursor-pointer transition-colors duration-300 cursor-pointer hover:text-green-500">
            SignIn/SignUp
          </p> */}
          <button
            className="flex items-center justify-center px-4 bg-neutral-800 text-white font-semibold rounded-md mx-9 sm:mx-0 transition-colors duration-300 hover:text-green-500"
            onClick={handleSignInClick}
          >
            SignIn
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
