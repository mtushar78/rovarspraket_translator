const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {normalToRov, rovToNormal} = require('../components/roverspraket')

router.post(
    "/normal",
    [check("text", "Text cannot be null or empty").not().isEmpty()],
    async (req, res) => {

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
            });
        }
        let roverspraket = normalToRov(req.body.text);

        return res.json({
            roverspraket: roverspraket
        });
    }
);

router.post(
    "/rovarsprak",
    [check("text", "Text cannot be null or empty").not().isEmpty()],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
            });
        }

        let text = req.body.text;
        // let roverspraket = '';
        let roverspraket = rovToNormal(text);
        return res.json({
            translation: roverspraket
        });

    }
);

module.exports = router;