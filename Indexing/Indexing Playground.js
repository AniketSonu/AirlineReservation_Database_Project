use("AirlineReservation")



db.passenger.find({ address: "Mumbai" }).explain("executionStats")


db.passenger.createIndex({address:1})