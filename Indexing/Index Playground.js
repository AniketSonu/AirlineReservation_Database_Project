use("AirlineReservation")

db.airlines.find({ airlineName: "AIRINDIA" }).explain("executionStats")


db.airlines.getIndexes()



