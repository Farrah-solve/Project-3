const express = require("express");
const router = express.Router();
const Budget = require("../models/budgetModel");

router.route("/budget").post((req, res) => {
    const tName = req.body.content;
    const transaction = req.body.content;
    const tAmount = req.body.content;
    const newTotal = new Total({
        tName,
        transaction,
        tAmount,
        total
    });

    newTotal.save();
});

router.route("/budget").get((req, res) => {
    Budget.find()
        .then(foundBudget => res.json(foundBudget))
})

module.exports = router;