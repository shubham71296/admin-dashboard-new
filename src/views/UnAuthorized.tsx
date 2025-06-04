import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
      <p className="mb-6 text-lg text-gray-700">
        You do not have permission to view this page.
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default UnAuthorized;
