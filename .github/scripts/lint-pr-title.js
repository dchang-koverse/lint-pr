import { Octokit } from "@octokit/rest";
import core from '@actions/core';

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const PR_NUMBER = core.getInput('PR_NUMBER');

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
})

const { data: pullRequest } = await octokit.rest.pulls.get({
  owner: 'dchang-koverse',
  repo: 'lint-pr',
  pull_number: PR_NUMBER
});

console.log(pullRequest)
