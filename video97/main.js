// main.js
import mongoose from "mongoose";
import express from "express";
import { dummy } from "./models/dummy.js";

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/company")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Generate random dummy employees
function generateDummyEmployees() {
  const names = ["Arshad", "Sally", "Tom", "Jerry", "Anna", "Ali", "Sophia", "Rawyan", "Emily", "Amir"];
  const languages = ["Python", "JavaScript", "Java", "C++", "Go", "Rust"];
  const cities = ["New York", "London", "Paris", "Tokyo", "Berlin", "Dubai"];

  const data = [];

  for (let i = 0; i < 10; i++) {
    data.push({
      name: names[i % names.length],
      salary: Math.floor(Math.random() * 1000000 + 50000),
      language: languages[i % languages.length],
      city: cities[i % cities.length],
      isManager: Math.random() > 0.5
    });
  }

  return data;
}

// API to clear and insert dummy data
app.get('/generate', async (req, res) => {
  try {
    await dummy.deleteMany(); // Clear old records
    const records = generateDummyEmployees(); // Generate 10 records
    await dummy.insertMany(records); // Insert all
    res.send(`10 dummy employees generated successfully! ${records}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating dummy data');
  }
});

// Serve index.html for UI
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
