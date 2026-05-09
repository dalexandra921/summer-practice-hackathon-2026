const express = require("express");
const router = express.Router();

const users = require("../data/usersData");

router.get("/", (req,res) => {
    res.json(users);
});

router.post("/", (req,res) =>{
    const newUser={
        id: users.length +1,
        name: req.body.name,
        sport: req.body.sport,
        description: req.body.description,
        available: false,
    };

    users.push(newUser);
    res.json(newUser);
});

router.patch("/:id", (req,res) =>{
    const user = users.find(
        user => user.id == req.params.id
    );
    if(user){
        user.available =! user.available;
    }
    res.json(user);
});

module.exports = router;