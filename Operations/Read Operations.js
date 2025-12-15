//Retriving Without Timing DATA
use ("AirlineReservation")

db.airlines.find(
    {},
    { timings: 0 }
)