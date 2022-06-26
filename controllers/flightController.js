exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

const { v4: uuid } = require("uuid");

const flightDetails = [
  {
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: "26-06-2022",
    id: uuid(),
  },
];

// Fetch All Flights
exports.getFlights = (req, res) => {
    res.json(flightDetails);
}

//Fetch Single Flight
exports.singleFlight = (req, res) => {
    const id = req.params.id;

    function flightName(flight){
        return id == flight.id;
    }
     const singleFlight = flightDetails.find(flightName);
     if (!singleFlight) {
        return res.json({message: "Flight not found"});
      }else{
         res.json(singleFlight);
       }
    res.end;
};
