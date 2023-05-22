import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
})
(async () => {
  const { data: pullRequest } = await octokit.rest.pulls.get({
    owner: 'dchang-koverse',
    repo: 'lint-pr',
    pull_number: PR_NUMBER
  });

  console.log(pullRequest)
})
