const core = require('@actions/core');
const github = require('@actions/github');

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const PR_NUMBER = core.getInput('PR_NUMBER');

const octokit = github.getOctokit({});

const run = async () => {
  const result = await octokit.rest.pulls.get({
    owner: 'dchang-koverse',
    repo: 'lint-pr',
    pull_number: PR_NUMBER
  });

  console.log(result.data)
}

run();
