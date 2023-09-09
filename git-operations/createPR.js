const simpleGit = require('simple-git');
const fs = require('fs');

const repoDir = 'repo';
const branchName = 'new-feature';
const prTitle = 'New Feature';
const prBody = 'Description of the new feature';

simpleGit(repoDir).checkoutLocalBranch(branchName, (err) => {
    if (err) {
        console.error(`Error creating branch: ${err}`);
    } else {
        simpleGit(repoDir).add('.')
            .commit('New feature added')
            .push(['-u', 'origin', branchName], (err) => {
                if (err) {
                    console.error(`Error pushing branch: ${err}`);
                } else {
                    fs.writeFileSync('pr-details.json', JSON.stringify({ title: prTitle, body: prBody }));
                }
            });
    }
});
