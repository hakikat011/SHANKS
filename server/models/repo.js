const mongoose = require('mongoose');

const repoSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    // Add any other relevant fields
});

const Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;
