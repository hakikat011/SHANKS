const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
    issueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Repo' },
    solutionText: String,
    // Add any other relevant fields
});

const Solution = mongoose.model('Solution', solutionSchema);

module.exports = Solution;
