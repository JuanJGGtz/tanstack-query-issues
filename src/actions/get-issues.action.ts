import { githubApi } from "../api/github.api"

export const githubGetIssues = async ():Promise<GitHubIssue[]> => {
    const { data } = await githubApi.get<GitHubIssue[]>('/issues');
    return data;
}