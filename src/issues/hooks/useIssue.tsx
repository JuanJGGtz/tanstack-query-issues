import { useQuery } from "@tanstack/react-query"
import { githubGetIssue } from "../../actions/get-issue.action";

export const useIssue = (id?: number) => {

    const issueQuery = useQuery({
        queryKey: ['issue', id],
        queryFn: ({ signal }) => githubGetIssue({ signal, id }),
        staleTime: 1000 * 60,
    });

    return {
        issueQuery
    }
}
