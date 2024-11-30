import { GitHubLabel } from "../interface/label.interface";
import { githubApi } from "../api/github.api";

export const githubGetLabels = async (): Promise<GitHubLabel[]> => {
    try {
        const response = await githubApi.get<GitHubLabel[]>('/labels');
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub labels:', error);
        throw error;
    }
};