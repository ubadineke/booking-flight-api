exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

const { v4: uuid } = require("uuid");

let flightDetails = [
  {
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: "26-06-2022",
    id: uuid(),
  },
];

exports.getFlights = (req, res) => {
    res.json(flightDetails);
}