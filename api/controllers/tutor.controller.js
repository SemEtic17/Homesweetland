import Tutorr from '../models/tutor.model.js';


export const tutor = async (req, res) => {
    try {
        const tutors = await Tutorr.find();
        res.json(tutors);
    } catch (err) {
        console.error('Error fetching tutors:', err);
        res.status(500).json({ error: 'Internal error' });
    }
}