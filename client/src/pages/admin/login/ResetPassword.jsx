import { useState, useEffect } from "react";
import { resetPassword } from "../../../services/authService";
import { useParams } from "react-router-dom";

export const ResetPassword = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await resetPassword(token, { password: newPassword });
                console.log(response);
            } catch (error) {
                const errorMessage = error.response.data.message;
                console.log(errorMessage);
            }
        };

        verifyToken();
    }, []);

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
                    Set New Password
                </h2>
                <p className="text-sm text-center text-gray-500 mt-1 mb-6">
                    <span>Your identity has been verified. Please create a new password.</span>
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* New Password */}
                    <div className="relative w-full">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className={`w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                        >
                            <i className={`fa-solid ${showNewPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative w-full">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className={`w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                        >
                            <i className={`fa-solid ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 rounded text-white font-semibold cursor-pointer hover:opacity-85 transition-all"
                    >
                        Reset password
                    </button>
                </form>
            </div>
        </div>
    );
};
