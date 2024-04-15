import { Reservation } from "../models/reservationSchema.js";
import ErrorHandler from "../error/error.js";
import { json } from "express";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill all fields in the reservation form!", 400));
    }
    try {
        const reservation = await Reservation.create({ firstName, lastName, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
            reservation: reservation,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};
