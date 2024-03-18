import { Query } from '../models/query.model.js';

export const createQuery = async (req, res) => {
    try {
        console.log('hii');
        const { name, mobileNo, email, concern, countryCode } = req.body;
        const user = await Query.findOne({ email: email, mobileNo: mobileNo });
        console.log("user find", user);

        if (user) {
            user.concern.push(concern);
            user.save();
            res.status(201).json(user);
        }
        else {
            const newConcern = await Query.create({ name: name, countryCode: countryCode, mobileNo: mobileNo, email: email, concern: [concern] });
            console.log('newConcern', newConcern);
            res.status(201).json(newConcern);
        }

    } catch (error) {
        res.status(400).json(error);
    }
}