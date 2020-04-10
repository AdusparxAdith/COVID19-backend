const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/stats", require("./routes/stats"));

app.listen(PORT, () => {
  console.log("The Server is listening on 3000");
});
