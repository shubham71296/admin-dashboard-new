import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Login = () => {
  const {setUser} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "seller@gmail.com" && password === "1234") {
      setUser({
        name:"rahul p",
        role:"seller"
      })
      navigate("/seller/dashboard");
    } else {
      alert("Invalid seller credentials");
    }
  };

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
            <label className="text-sm font-medium text-gray-700">Password</label>
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
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-center text-gray-400 mt-6">
          Need help? Contact support@sellerhub.com
        </p>
      </div>
    </div>
  );
};

export default Login;
