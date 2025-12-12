use("AirlineReservation");
function addBooking(passengerData, airlineData, bookingData) {

    try {
        const passenger = db.passengers.insertOne(passengerData);

        try {
            const airline = db.airlines.insertOne(airlineData);

            try {
                bookingData.passengerId = passenger.insertedId;
                bookingData.airlineId = airline.insertedId;

                return db.bookings.insertOne(bookingData);

            } catch (err3) {
                db.airlines.deleteOne({ _id: airlineData._id });
                db.passengers.deleteOne({ _id: passengerData._id });
                return { status: "FAILED", error: err3.message };
            }

        } catch (err2) {
            db.passengers.deleteOne({ _id: passengerData._id });
            return { status: "FAILED", error: err2.message };
        }

    } catch (err1) {
        return { status: "FAILED", error: err1.message };
    }

    
}


addBooking(

{
    _id : "Bob@gmail.com",
    firstName: "BOB",
    lastName: "SAM",
    phoneNumber: "58436",
    address: "Punjab"
},

{
    _id: "AI144",
    airlineName: "AIR INDIA",
    airlineCode: "AI",
    source_airport: "BENGLORE",
    destination_airport: "PARIS",
    timings: "10PM"
},

{
    _id: 106,
    TravelDate: "2026-12-10",
    TotalPrice: "1000",
    BookingStatus: "Confirmed"
}

)

