import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";
import type { RootState, AppDispatch } from "../../redux/store";
import { clearMessages, seller_login } from "../../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loader, errorMessage, successMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(seller_login({email,password}))
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessages())
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessages())
      navigate("/");
    } 
  }, [errorMessage, successMessage]);

 

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl px-10 py-12 w-full max-w-md animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <FaStore className="text-blue-500 text-5xl mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Seller Login</h2>
          <p className="text-sm text-gray-500">Access your seller dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="seller@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loader}
            className={`w-full py-2 rounded-lg transition flex items-center justify-center gap-2
            ${
              loader
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }
            `}
          >
            {loader ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-xs text-center text-gray-400 mt-6">
          Dont have account? please{" "}
          <NavLink
            to="/register"
            className="text-blue-600 font-bold cursor-pointer text-md"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
