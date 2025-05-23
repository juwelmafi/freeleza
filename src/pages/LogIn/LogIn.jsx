import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthPrivider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LogIn = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [errroMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  // Log In //

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  // Google Sign in //

  const handleGoogleLogIn = () => {
    googleLogin()
      .then(() => {
        // console.log(result.user);
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };
  return (
    <div className="hero min-h-[90vh] w-full">
      <div className="hero-content w-full">
        <div className="card bg-base-100 max-w-sm w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className=" font-bold text-2xl text-center">Log in now!</h2>
            <form className="fieldset" onSubmit={handleLogIn}>
              <label className="label ">Email</label>
              <input
                type="email"
                className="input "
                placeholder="Email"
                name="email"
              />
              <label className="label ">Password</label>
              <div className="relative">
                <input
                  type={`${showPass ? "text" : "password"}`}
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-3 right-3 md:right-6"
                >
                  {" "}
                  {showPass ? (
                    <FaEyeSlash
                      size={18}
                      className="text-gray-500"
                    ></FaEyeSlash>
                  ) : (
                    <FaEye size={18} className="text-gray-500"></FaEye>
                  )}
                </button>
              </div>
              <div>
                <a className="link link-hover ">Forgot password?</a>
              </div>
              <p className="text-red-500">{errroMessage}</p>
              <button
                type="submit"
                className="btn shadow-none bg-[#04284B] text-white mt-2 hover:bg-[#222e39] border border-gray-500"
              >
                Login
              </button>
              <button
                type="button"
                className="btn bg-white text-black border-[#e5e5e5]"
                onClick={handleGoogleLogIn}
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="">
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-blue-600">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
