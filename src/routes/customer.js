const express = require("express");
const customerRoutes = express.Router();
const fs = require("fs");

const customerDB = "./db/customer.json";

// Funktion til at gemme kunder i JSON-filen
const saveCustomers = (data) => {
  const stringifyData = JSON.stringify(data, null, 2); // Formater JSON-data
  fs.writeFileSync(customerDB, stringifyData);
};

// Funktion til at hente kunder fra JSON-filen
const getCustomers = () => {
  const jsonData = fs.readFileSync(customerDB);
  return JSON.parse(jsonData);
};

// Hent alle kunder
customerRoutes.get("/", (req, res) => {
  const customers = getCustomers();
  res.send(customers);
});

// Slet en kunde baseret på ID
customerRoutes.delete("/delete/:id", (req, res) => {
  let customers = getCustomers();
  const customerId = req.params["id"];

  if (customers[customerId]) {
    delete customers[customerId];
    saveCustomers(customers);
    res.send(`Kunde med id ${customerId} er blevet slettet.`);
  } else {
    res.status(404).send(`Kunde med id ${customerId} blev ikke fundet.`);
  }
});

// Opret en ny kunde
customerRoutes.post("/add", (req, res) => {
  const customers = getCustomers();
  const newCustomer = req.body;

  // Simuler auto-generering af ID
  const newId = Date.now().toString();
  customers[newId] = newCustomer;

  saveCustomers(customers);
  res.send(`Kunde med id ${newId} er blevet oprettet.`);
});

module.exports = customerRoutes;
