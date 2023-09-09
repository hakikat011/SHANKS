const express = require('express');
const router = express.Router();
const { searchRepos } = require('../utils/github');

router.get('/search', async (req, res) => {
    const repos = await searchRepos(req.query.criteria);
    res.json(repos);
});

module.exports = router;
