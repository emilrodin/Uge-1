const express = require("express");
const customerRoutes = express.Router();
const fs = require("fs");

const customerDB = "./db/customer.json";

// Funktion til at gemme kunder i JSON-filen
const saveCustomers = (data) => {
  const stringifyData = JSON.stringify(data, null, 2); 
  fs.writeFileSync(customerDB, stringifyData);
};

// Funktion til at hente kunder fra JSON-filen
const getCustomers = () => {
  const jsonData = fs.readFileSync(customerDB);
  return JSON.parse(jsonData);
};

// Hent alle kunder
customerRoutes.get("/", (req, res) => {

});

// Slet en kunde baseret på ID
customerRoutes.delete("/delete/:id", (req, res) => {

});

// Opret en ny kunde
customerRoutes.post("/add", (req, res) => {

});

module.exports = customerRoutes;
