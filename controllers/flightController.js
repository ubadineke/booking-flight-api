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
    //id: uuid(),
    id: 25,
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
     }
    res.json(singleFlight);
};



//Add/Book Flight 
exports.bookFlight = (req, res) => {
    const { title, price } = req.body;
    if (!title || !price) {
      return res.json({ message: "Please Provide Necessary Fields" });
    }
    flightDetails.push({
      title,
      time: new Date().toLocaleTimeString(),
      price,
      date: new Date().toLocaleDateString(),
      id: uuid(),
    });
    res.json(flightDetails);
  };

//Update Existing Flight 
    exports.updateFlight = (req, res) => {
        const id = req.params.id;
    const { title, price } = req.body;

    function updatingFlight(flight){
        return flight.id == id;
    }
    const updatedFlight = flightDetails.find(updatingFlight);
    if (updatedFlight) {
        updatedFlight.price = price;
        updatedFlight.title = title;

        res.json(updatedFlight);
    }
    };

  //Delete Flight
  exports.deleteFlight = (req, res) => {
    const id = req.params.id;
    console.log(id)
    function deletedFlight(flight){
        flight.id != id;
    }
    const delFlight = flightDetails.filter(deletedFlight);
    if (!delFlight) {
        res.json({message: "Flight not found"});
     }else{
         res.json({message: "Flight has been deleted successfully"})
     }
    res.json(delFlight);
  };