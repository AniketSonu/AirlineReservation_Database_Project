use('AirlineReservation')

db.airlines.insertMany([
    {
        _id: "AI155",
        airlineName: "AIRINDIA",
        airlineCode: "AI",
        source_airport: "Delhi",
        destination_airport: "BERLIN",
        timings:"2PM"
    },
    {
    _id: "AI256",
    airlineName: "AIRINDIA",
    airlineCode: "AI",
    source_airport: "Mumbai",
    destination_airport: "New York",
    timings: "6AM"
},
{
    _id: "EK378",
    airlineName: "EMIRATES",
    airlineCode: "EK",
    source_airport: "Dubai",
    destination_airport: "Sydney",
    timings: "9PM"
},
{
    _id: "BA442",
    airlineName: "BRITISH AIRWAYS",
    airlineCode: "BA",
    source_airport: "London",
    destination_airport: "Tokyo",
    timings: "11AM"
},
{
    _id: "DL903",
    airlineName: "DELTA AIRLINES",
    airlineCode: "DL",
    source_airport: "Atlanta",
    destination_airport: "Paris",
    timings: "3PM"
},
{
    _id: "QR721",
    airlineName: "QATAR AIRWAYS",
    airlineCode: "QR",
    source_airport: "Doha",
    destination_airport: "Toronto",
    timings: "8AM"
}   

])


