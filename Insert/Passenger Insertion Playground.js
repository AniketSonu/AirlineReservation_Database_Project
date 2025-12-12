use('AirlineReservation')

//Inserting BY One
db.passenger.insertOne(
   
{
    _id : "rohit123@gmail.com",
    firstName: "Rohit",
    lastName: "Sharma",
    phoneNumber: "516543",
    address: "Delhi"
  
}  
)


//Inserting BY Many

db.passenger.insertMany([
    {
    _id : "sam@gmail.com",
    firstName: "Sam",
    lastName: "David",
    phoneNumber: "51614511659543",
    address: "USA"
  
},
{
    _id : "ViratKohli@gmail.com",
    firstName: "Virat",
    lastName: "Kohli",
    phoneNumber: "1226596",
    address: "London"
  
},
{
    _id : "elon.musk@example.com",
    firstName: "Elon",
    lastName: "Musk",
    phoneNumber: "5551289463",
    address: "Texas"
},
{
    _id : "emma.watson@example.com",
    firstName: "Emma",
    lastName: "Watson",
    phoneNumber: "7410258963",
    address: "Paris"
},
{
    _id : "cristiano.ronaldo@example.com",
    firstName: "Cristiano",
    lastName: "Ronaldo",
    phoneNumber: "9638527410",
    address: "Lisbon"
},
{
    _id : "marie.curie@example.com",
    firstName: "Marie",
    lastName: "Curie",
    phoneNumber: "8521479630",
    address: "Warsaw"
}
])


db.passenger.find()

