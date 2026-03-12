import { useState } from "react";
import { Link } from "react-router-dom";
import { forgetPassword } from "../../../services/authService";
import { StatusModal } from "../../../components/admin/StatusModal";

export const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowModal(false);
    try {
      const response = await forgetPassword({ username: username });
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center max-w-sm w-full mb-4">
        <img
          src="https://res.cloudinary.com/dgokm518s/image/upload/v1770494016/fevicon_fb3yom.png"
          alt="Raima-energy"
          className="w-60 h-18 object-cover mx-auto"
        />
      </div>
      <div className="bg-white shadow-lg p-8 rounded-2xl max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Forgot password?
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1 mb-6">
          <span>Remember your password?</span>
          <Link
            to={"/login"}
            className="ml-2 text-blue-600"
          >
            Login Here
          </Link>
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="label">
            <span className="text-sm font-bold">Email address</span>
            <input
              className="border border-gray-300 px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 w-full"
              placeholder="Enter your email"
              required
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className={`w-full py-2.5 rounded-lg text-white text-sm font-medium transition duration-300 ${loading ? "bg-blue-300 cursor-not-allowed " : "bg-blue-600 hover:bg-blue-500 cursor-pointer"}`}
          >
            {loading && (
              <i className="fa-solid fa-spinner fa-spin mr-2"></i>
            )}
            {loading ? "Sending link.." : "Send reset link"}
          </button>

        </form>
        {showModal &&
          <StatusModal title="Email sent" message="If an account exists for this email, a password reset link has been sent." setShowModal={setShowModal} buttonText="OK" />
        }
      </div>
    </div>
  );
}
