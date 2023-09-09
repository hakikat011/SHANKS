const express = require('express');
const router = express.Router();
const { generateSolution } = require('../utils/openai');

router.post('/solve', async (req, res) => {
    const solution = await generateSolution(req.body.problemStatement);
    res.json(solution);
});

module.exports = router;
