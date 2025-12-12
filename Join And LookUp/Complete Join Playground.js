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
        },
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