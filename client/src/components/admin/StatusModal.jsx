import { Link } from "react-router-dom";

export const StatusModal = ({ title, message, setShowModal }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
            <div className="bg-white rounded-xl p-4 max-w-md shadow-xl flex flex-col w-[90%] items-center">
                <h2 className="text-xl font-semibold mb-3">{title}</h2>
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                    className="text-white"
                    onClick={() => setShowModal(false)}
                >
                    <Link to="/login" className="w-full bg-blue-700 px-4 py-2 rounded">Go to login</Link>
                </button>
            </div>
        </div>
    );
};
