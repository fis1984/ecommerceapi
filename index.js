const express = require("express");
const app = express();
/* const port = app.config.port || app.config.default; */
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DBConnection established");
    })
    .catch((error) => console.log(`Error ${error} connecting`));

/* app.get("/api/test", (req, res) => {
    res.status(200).send({ test: "test is success" });
    res.end();
}); */

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || port, () => {
    console.log(`Server listening on port ${port}`);
});
