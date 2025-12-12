use("AirlineReservation")

db.bookings.aggregate(
    [
        {
        $lookup: {
            from: "airlines",        
            localField: "airlineID", 
            foreignField: "_id",     
            as: "airlineDetails"
        } 
    }
    ]
)