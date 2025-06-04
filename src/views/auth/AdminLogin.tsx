import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

const AdminLogin = () => {
  const {setUser} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add real auth here
    if (email === "admin@gmail.com" && password === "1234") {
      setUser({
        name:"shubham p",
        role:"admin"
      })
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <FaUserShield className="text-blue-600 text-5xl mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-sm text-gray-500">Welcome back, Admin!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="admin@example.com"
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
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
