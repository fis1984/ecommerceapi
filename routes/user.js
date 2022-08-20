const express = require("express");
const router = express.Router();

router.get("/usertest", (req, res) => {
    res.send("user test is successful");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username;
    res.send(`you user name is ${username}`);
});

module.exports = router;
