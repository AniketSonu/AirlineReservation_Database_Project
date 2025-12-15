use("AirlineReservation")

db.passenger.find({ firstName: "Vivaan" }).explain("executionStats")


db.passenger.getIndexes()



