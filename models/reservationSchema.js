import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be at least 3 characters long"],
        maxlength: [30, "First name cannot exceed 30 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be at least 3 characters long"],
        maxlength: [30, "Last name cannot exceed 30 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Invalid email address"]
    },
    phone: {
        type: String,
        required: true,
        minlength: [9, "Phone number must be 11 digits long"],
        maxlength: [9, "Phone number must be 11 digits long"]
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
