import { useQuery } from "@tanstack/react-query"
import { githubGetIssues } from "../../actions/get-issues.action"

export const useIssues = () => {
    const issueQuery = useQuery({
        queryKey: ['issues'],
        queryFn: () => githubGetIssues(),
        staleTime: 1000 * 60,
    })


    return {
        issueQuery,
    }
}
