import Name from "../models/name.js";

export const addName = async (req, res) => {
    try {
        const data = await Name.create(req.body);
        res.json({ message: "Name Added", data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getNames = async (req, res) => {
    try {
        const data = await Name.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
