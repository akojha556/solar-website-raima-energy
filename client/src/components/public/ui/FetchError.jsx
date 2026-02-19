import { useAppData } from "../../../context/AppDataContext";

const FetchError = ({ message }) => {
    const { fetchData } = useAppData();

    return (
        <div className="text-center py-20">
            <p className="text-lg font-semibold">
                {message}
            </p>
            <button
                onClick={() => fetchData()}
                className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer"
            >
                Retry
            </button>
        </div>
    )
};

export default FetchError;