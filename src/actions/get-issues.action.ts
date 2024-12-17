import { githubApi } from "../api/github.api"
import { GitHubIssue } from "../interface/issues.interface";
import { IssueState, States } from "../issues/views/ListView";

export const githubGetIssues = async (state: IssueState): Promise<GitHubIssue[]> => {
    const url = `/issues`;

    const params = new URLSearchParams();
    if (state != States.all) {
        params.set('state', state);
    }

    const { data } = await githubApi.get<GitHubIssue[]>(url, {
        params
    });
    return data;
}