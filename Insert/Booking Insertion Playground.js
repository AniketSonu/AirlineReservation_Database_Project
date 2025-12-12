use('AirlineReservation')

db.bookings.insertMany([
    {
    
    _id: 101,
    TravelDate: "2025-12-10",
    TotalPrice: "500",
    BookingStatus: "Confirmed",
    passengerId: "sam@gmail.com",
    airlineID: "AI155"
},
{
    
    _id: 102,
    TravelDate: "2025-12-12",
    TotalPrice: "750",
    BookingStatus: "Confirmed",
    passengerId: "virat.kohli@gmail.com",
    airlineID: "EK378"
},
{
    
    _id: 103,
    TravelDate: "2025-12-15",
    TotalPrice: "650",
    BookingStatus: "Pending",
    passengerId: "sam@gmail.com",
    airlineID: "EK378"
},
{
    _id: 104,
    TravelDate: "2025-12-18",
    TotalPrice: "800",
    BookingStatus: "Cancelled",
    passengerId: "emma.watson@example.com",
    airlineID: "BA442"
},
{
    
    _id: 105,
    TravelDate: "2025-12-20",
    TotalPrice: "900",
    BookingStatus: "Confirmed",
    passengerId: "cristiano.ronaldo@example.com",
    airlineID: "QR721"
}
])