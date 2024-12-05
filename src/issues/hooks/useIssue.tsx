import { useQuery } from "@tanstack/react-query"
import { githubGetIssue } from "../../actions/get-issue.action";
import { githubGetComments } from "../../actions/get-comments.action";

export const useIssue = (id?: number) => {

    const issueQuery = useQuery({
        queryKey: ['issue', id],
        queryFn: ({ signal }) => githubGetIssue({ signal, id }),
        staleTime: 1000 * 60,
    });

    const idComments = issueQuery.data?.number || undefined;

    const commentsQuery = useQuery({
        queryKey: ['issue', idComments, 'comments'],
        queryFn: ({ signal }) => githubGetComments({ signal, id: idComments }),
        staleTime: 1000 * 60,
        enabled: !!idComments
    });


    return {
        issueQuery,
        commentsQuery
    }
}
