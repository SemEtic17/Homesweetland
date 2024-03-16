import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema(
    {
        idt: {
            type: Number
        },
        tutimg: {
            type: String,
            default:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',     
        },
        tutname: {
            type: String,
            required: true,
        },
        about: {
            type: String,
        },
        education: {
            type: String,
        },
        gender: {
            type: String,
        },
        flexibility: {
            type: String,
            required: true,
        },
        tutemail: {
            type: String,
            required: true,
        }
    }
)

const Tutorr = mongoose.model('Tutor', tutorSchema);

export default Tutorr;