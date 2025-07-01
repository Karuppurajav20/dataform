const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/employee');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email, password })
        .then(user => {
            if (user) {
                res.json({ message: "Login successful" });
            } else {
                res.json({ message: "Invalid credentials" });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Server error" });
        });
});



app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then((employee) => {
            res.json(employee);
        })
        .catch((err) => {
            console.error(err);
        });
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
})