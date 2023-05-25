import { Octokit } from "@octokit/rest";
import core from '@actions/core';
import github from '@actions/github'

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
})

try {
  const response = await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
    owner: 'dchang-koverse',
    repo: 'lint-pr',
    pull_number: github.context.payload.pull_request.number,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  const title = response.data.title;
  const regex = /\[CRUC-\d+\]\[.+\] .+/;
  if (!regex.test(title)) {
    core.setFailed('PR title is not in the correct format. Please use "[CRUC-1234][UI] My description" format.')
  } else {
    console.log('PR title is in the correct format. Good job!')
  }
} catch (error) {
  console.warn(error)
}
