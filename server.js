require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/plan", require("./routes/plan"));
app.use("/user", require("./routes/user"))
app.use("/auth", require("./routes/auth"))