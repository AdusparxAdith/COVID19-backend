const express = require("express");
const router = express.Router();
const Axios = require("axios");

router.get("/getCountries", async (req, res) => {
  try {
    let result = await Axios.get("https://covid19.mathdro.id/api/countries");
    res.send(result.data.countries);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getStats", async (req, res) => {
  try {
    let country = req.query.country;
    let result = await Axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
