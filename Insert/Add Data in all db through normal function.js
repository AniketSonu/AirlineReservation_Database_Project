use("AirlineReservation")

function addBooking(passengerData, airlineData, bookingData) {
    
    
    const passengerId = db.passenger.insertOne(passengerData).insertedId;
    
    
    const airlineId = db.airline.insertOne(airlineData).insertedId;

    bookingData.passengerId = passengerId;
    bookingData.airlineId = airlineId;

   
    return db.bookings.insertOne(bookingData);
}


addBooking(

{
    _id : "Raja@gmail.com",
    firstName: "Raja",
    lastName: "Raj",
    phoneNumber: "35454684",
    address: "Punjab"
},

{
    _id: "LH197",
    airlineName: "Luftansha",
    airlineCode: "LH",
    source_airport: "DENVEr",
    destination_airport: "New York",
    timings: "9AM"
},

{
    _id: 106,
    TravelDate: "2025-12-10",
    TotalPrice: "500",
    BookingStatus: "Confirmed"
}

)
