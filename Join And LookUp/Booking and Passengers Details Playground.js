use("AirlineReservation")

db.bookings.aggregate(
    [
        {
        
        $lookup: {
            from: "passenger",         
            localField: "passengerId", 
            foreignField: "_id",       
            as: "passengerDetails"
        }
    } 
    ]
)