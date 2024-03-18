import { Contact } from '../models/contact.model.js';

export const createConcer = async (req, res) => {
    try {
        const { name, mobileNo, email, concern, countryCode } = req.body;
        const user = await Contact.findOne({ email: email, mobileNo: mobileNo });
        // console.log("user find", user);

        if (user) {
            user.concern.push(concern);
            user.save();
            res.status(201).json(user);
        }
        else {
            const newConcern = await Contact.create({ name: name, countryCode: countryCode, mobileNo: mobileNo, email: email, concern: [concern] });
            // console.log("newConcern", newConcern);
            res.status(201).json(newConcern);
        }

    } catch (error) {
        res.status(400).json(error);
    }
}