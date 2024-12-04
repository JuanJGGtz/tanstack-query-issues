import { githubApi } from "../api/github.api"
import { GitHubIssue } from "../interface/issues.interface";

export const githubGetIssue = async ({ id, signal }: { id?: number, signal?: AbortSignal }): Promise<GitHubIssue> => {
    const params = `/issues${id ? "/" + id : ""}`;
    const { data } = await githubApi.get<GitHubIssue>(params, { signal });
    return data;
}