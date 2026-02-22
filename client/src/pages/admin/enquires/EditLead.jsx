import { useState, useEffect } from "react";
import { getLead, editLead } from "../../../services/leadService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditLead = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [city, setCity] = useState("");

    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { id } = useParams();

    //Add new lead
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        const data = {
            name,
            email,
            phoneNumber,
            city
        };

        try {
            setIsSubmitting(true);
            const response = await editLead(id, data);
            console.log(response.data);
        } catch (error) {
            alert(error.message);
        } finally {
            setIsSubmitting(false);
            navigate("/admin/enquiries");
        };
    };

    //Fetch already available lead info
    useEffect(() => {
        const fetchLead = async () => {
            try {
                setLoading(true);
                const response = await getLead(id);
                const lead = response.data.lead;
                setName(lead.name);
                setEmail(lead.email);
                setPhoneNumber(lead.phoneNumber);
                setCity(lead.city);
                console.log(lead);
            } catch (error) {
                alert(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLead();
    }, []);

    return (
        <div>
            {loading ?
                <div className="flex items-center justify-center gap-2 py-6 text-gray-600">
                    <i className="fa-solid fa-spinner animate-spin text-lg"></i>
                    <span>Loading data...</span>
                </div> :
                <div>
                    <h1 className="text-2xl font-bold mb-6">Add New Lead</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <label className="label">
                            <p className="font-bold">Name</p>
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter client name."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>

                        <label className="label">
                            <p className="font-bold">E-mail</p>
                            <input
                                className="input"
                                type="text"
                                placeholder="add an e-mail (optional)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label className="label">
                            <p className="font-bold">Contact number of the customer</p>
                            <input
                                className="input"
                                type="tel"
                                minLength="10"
                                placeholder="Add a contact number."
                                value={phoneNumber}
                                onChange={(e) => {
                                    const onlyNumbers = e.target.value.replace(/\D/g, "");
                                    setPhoneNumber(onlyNumbers);
                                }}
                                required
                            />
                        </label>

                        <label className="label">
                            <p className="font-bold">City</p>
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter city name."
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-2 rounded text-white flex items-center justify-center gap-2 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                    <span>Updating Lead...</span>
                                </>
                            ) : (
                                "Confirm"
                            )}
                        </button>
                    </form>
                </div>
            }
        </div>
    )
}

export default EditLead;