import { githubApi } from "../api/github.api"
import { GitHubIssue } from "../interface/issues.interface";

export const githubGetIssues = async (): Promise<GitHubIssue[]> => {
    const url = `/issues`;
    const { data } = await githubApi.get<GitHubIssue[]>(url);
    return data;
}