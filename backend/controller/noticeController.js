
import Notice from '../Models/notice.js';

export const addNotice = async (req, res) => {
    try {

        const newNotice = new Notice({
            text: req.body.text
        });


        const savedNotice = await newNotice.save();


        res.json(savedNotice);
    } catch (error) {
        console.error('Error adding notice:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const fetchNotice = async (req, res) => {
    try {
        const data = await Notice.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'error while fetching notices' });
    }
};
