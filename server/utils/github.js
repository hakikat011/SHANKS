const axios = require('axios');

const GITHUB_BASE_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const searchRepos = async (criteria) => {
    const response = await axios.get(`${GITHUB_BASE_URL}/search/repositories?q=${criteria}`, {
        headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`
        }
    });
    return response.data.items;  // Returns list of repositories
};

module.exports = { searchRepos };
