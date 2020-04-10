const express = require("express");
const router = express.Router();
const Axios = require("axios");

router.get("/getCountries", async (req, res) => {
  try {
    let result = await Axios.get("https://covid19.mathdro.id/api/countries");
    res.send({ countires: result.data.countries });
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

    res.send({ stats: result.data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
