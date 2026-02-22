import asyncHandler from "express-async-handler";
import Lead from "../model/lead-model.js";

//Get all lead
export const getLeads = asyncHandler(async (req, res) => {
    const leads = await Lead.find();
    res.status(200).json(leads);;
});

//Get lead count
export const getLeadCount = asyncHandler(async (req, res) => {
    const count = await Lead.countDocuments();
    res.status(200).json(count);
});

//Get individual lead
export const getLead = asyncHandler(async (req, res) => {
    const { id } = req.params;

    //Check id is valid mongodb id or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error("This id is invalid!");
    };

    const lead = await Lead.findById(id);

    if (!lead) {
        res.status(400);
        throw new Error("This lead isn't available or has been removed!");
    };

    res.status(200).json({ lead });
});

// Add new lead
export const addLead = asyncHandler(async (req, res) => {
    const { name, email, phoneNumber, city } = req.body;

    if (!name || !phoneNumber || !city) {
        res.status(400);
        throw new Error("All fields required!");
    };

    const lead = await Lead.findOne({ phoneNumber });

    if (lead) {
        res.status(400);
        throw new Error("This user is already there!");
    };

    const newLead = await Lead.create({ name, email, phoneNumber, city });

    res.status(201).json({
        success: true,
        message: "New user registered successfully.",
    });
});

//Update lead(Edit lead data)
export const editLead = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email, phoneNumber, city } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;
    if (city) updateData.city = city;
    if (email) updateData.email = email;

    const updatedLead = await Lead.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!updatedLead) {
        res.status(400);
        throw new Error("This user isn't available or has been removed!");
    };

    res.status(200).json({
        message: "Lead updated successfully",
        data: updatedLead,
    });
});

//Remove lead
export const removeLead = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const lead = await Lead.findById(id);

    if (!lead) {
        res.status(400);
        throw new Error("This user is not available or has been removed!");
    }

    await Lead.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "The lead is removed successfully." });
});