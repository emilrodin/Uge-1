const express = require('express');
const cors = require("cors");
const customerRoutes = require("./routes/customer")
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/customers", customerRoutes);

// Middleware til at logge requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// "Hello World" endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// "GET" endpoint "/about"
app.get('/about', (req, res) => {
  res.json({ message: 'Dette er en simpel Express-server.' });
});

// "POST" endpoint "/echo"
app.post('/echo', (req, res) => {
  res.json(req.body);
});

// Fejlhåndteringsmiddleware
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route ikke fundet' });
});

// Start serveren
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});