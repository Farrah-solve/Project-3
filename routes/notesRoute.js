const express = require("express");
const router = express.Router();
const Notes = require("../models/notesModel");

router.route("/notes").post((req, res) => {
    const title = req.body.content;
    const content = req.body.content;
    const newNote = new Notes({
        title,
        content
    });

    newNote.save();
}}

module.exports = router;