const express = require('express');
const path = require('path');
const Doctor = require('./db.js');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT;



// Middleware to parse JSON
app.use(express.json());

app.post("/register", async (req, res) => {
    const { name, specialization, phoneno, location, hospitalname } = req.body;

    const newDoc = new Doctor({
        name,
        specialization,
        phoneno,
        location,
        hospitalname
    });

    try {
        await newDoc.save();
        res.status(201).send("Doctor saved successfully!");
    } catch (err) {
        console.error(err);
        res.status(400).send("Error saving doctor: " + err.message);
    }
});

app.get("/docinfo/:name",async (req,res)=>{
    const doctorName = req.params.name;

    try{
        const doctor = await Doctor.findOne({name:doctorName})

        if(!doctor){
            res.send("cant find a doctor")
        }

        res.status(200).json(doctor);
    }
    catch{
        res.status(401);
        res.send("error")
    }
})
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
