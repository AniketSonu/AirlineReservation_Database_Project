use("AirlineReservation")

db.passenger.find({ firstName: "Vivaan" }).explain("executionStats")


db.passenger.getIndexes()

db.passenger.createIndex({firstName:1})

db.passenger.dropIndex(firstName)