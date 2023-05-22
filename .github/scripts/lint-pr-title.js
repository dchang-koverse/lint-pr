import { Octokit } from "@octokit/rest";
import core from '@actions/core';

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const PR_NUMBER = core.getInput('PR_NUMBER');
console.log('PR_NUMBER', PR_NUMBER)

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
})

const root = await octokit.request("GET /")
console.log(root.status)

try {
  const response = await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
    owner: 'dchang-koverse',
    repo: 'lint-pr',
    pull_number: PR_NUMBER,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  console.log(response)
} catch (error) {
  console.warn(error)
}
