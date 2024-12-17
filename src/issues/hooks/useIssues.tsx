import { useQuery } from "@tanstack/react-query"
import { githubGetIssues } from "../../actions/get-issues.action"
import { IssueState } from "../views/ListView";



export const useIssues = (state: IssueState) => {
    const issueQuery = useQuery({
        queryKey: ['issues', { state }],
        queryFn: () => githubGetIssues(state),
        staleTime: 1000 * 60,
    });


    return {
        issueQuery,
    }
}
