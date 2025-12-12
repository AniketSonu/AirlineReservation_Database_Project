use("AirlineReservation")
// Show data where Condition
db.bookings.aggregate([
    {
        $match: {
          BookingStatus:"Confirmed"
        }
    }
])

// Total bookings per passenger
db.bookings.aggregate(
    [
        {
        $group: {
            _id: "$airlineID",        
            totalBookings: { $sum: 1 }
        }
        }
    ]
)



// Total Cost per passenger
db.bookings.aggregate([
    {
        $project: {
            passengerId: 1,
            TotalPrice: 1,
            _id: 0
        }
    }
])