const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {normalToRov, rovToNormal} = require('../components/rovarspraket')

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
        let rovarspraket = normalToRov(req.body.text);

        return res.json({
            rovarspraket: rovarspraket
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
        // let rovarspraket = '';
        let rovarspraket = rovToNormal(text);
        return res.json({
            translation: rovarspraket
        });

    }
);

module.exports = router;