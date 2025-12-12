use("AirlineReservation")

db.passenger.updateOne({firstName :"Sam"},{$set:{address :"Africa"}})


db.passenger.findOne({firstName:"Sam"})



    db.airlines.updateMany({airlineName :"AIRINDIA"},{$set:{timings :"6AM"}})