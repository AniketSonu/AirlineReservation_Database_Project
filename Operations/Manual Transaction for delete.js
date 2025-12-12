use("AirlineReservation")

function deleteBooking(bookingId) {
    try {
       
        const booking = db.bookings.findOne({ _id: bookingId });

        if (!booking) {
            return { status: "FAILED", error: "Booking not found" };
        }

        const passengerId = booking.passengerId;
        const airlineId = booking.airlineId;

       
        const bookingDelete = db.bookings.deleteOne({ _id: bookingId });
        if (bookingDelete.deletedCount !== 1) {
            return { status: "FAILED", error: "Failed to delete booking" };
        }

       
        const airlineDelete = db.airlines.deleteOne({ _id: airlineId });

        
        const passengerDelete = db.passenger.deleteOne({ _id: passengerId });

        return {
            status: "SUCCESS",
            deletedBookingId: bookingId,
            deletedPassengerId: passengerDelete.deletedCount ? passengerId : null,
            deletedAirlineId: airlineDelete.deletedCount ? airlineId : null
        };

    } catch (err) {
        return { status: "FAILED", error: err.message };
    }
}



deleteBooking(101);
