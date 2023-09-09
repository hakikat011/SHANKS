const simpleGit = require('simple-git');

const repoUrl = 'https://github.com/username/repo.git';

simpleGit().clone(repoUrl, (err) => {
    if (err) {
        console.error(`Error cloning repository: ${err}`);
    }
});
