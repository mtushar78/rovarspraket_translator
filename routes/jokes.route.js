const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { normalToRov, rovToNormal } = require('../components/rovarspraket');
const axios = require('axios');


router.get(
    "/",
    async (req, res) => {
        // const error = validationResult(req);
        // if (!error.isEmpty()) {
        //     return res.status(400).json({
        //         error: error.array(),
        //     });
        // } else if (req.body.language !== 'rs' && req.body.language !== 'en') {
        //     return res.status(400).json({
        //         error: 'Language should be either en or rs',
        //     });
        // }
        let response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        // response = await response.data.json();
        let joke = response.data.joke;
        // joke = joke.replace(/\\/g, '');
        // if (req.body.language === 'en') {

        //     return res.json({
        //         joke: joke
        //     });
        // } else {

        //     return res.json({
        //         joke: normalToRov(joke)
        //     });
        // }
        return res.json({
            en: joke,
            joke: normalToRov(joke),

        });
        // console.log(response.data.joke);

    }
);

module.exports = router;