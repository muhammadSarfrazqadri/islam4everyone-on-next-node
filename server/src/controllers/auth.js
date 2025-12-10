import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hash });

        res.json({ message: "Signup Successful", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ error: "Invalid Password" });

        const token = jwt.sign({ id: user._id }, "secretKey");

        res.json({ message: "Login Successful", token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
