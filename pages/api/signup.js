import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if (method === "POST") {
        try {
            const {
                firstName,
                lastName,
                email,
                password,
                contactNumber,
                designation,
                socialProfile,
                state,
                region,
                companyName,
                college,
                course,
                services,
            } = req.body;

            // Perform any necessary data validation here before saving to the database

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                firstName,
                lastName,
                name: firstName + " " + lastName,
                email,
                password: hashedPassword,
                contactNumber,
                designation,
                socialProfile,
                state,
                region,
                companyName,
                college,
                course,
                services,
            });

            await user.save();
            res.status(200).json({ success: true, data: user });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
};

export default handler;
