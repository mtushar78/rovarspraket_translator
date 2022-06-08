const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { normalToRov, rovToNormal } = require('../components/rovarspraket');
const axios = require('axios');


router.get(
    "/",
    async (req, res) => {
        let response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        let joke = response.data.joke;
        return res.json({
            en: joke,
            joke: normalToRov(joke),

        });
        // console.log(response.data.joke);

    }
);

module.exports = router;