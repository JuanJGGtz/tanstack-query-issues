import { useQuery } from "@tanstack/react-query"
import { githubGetComments } from "../../actions/get-comments.action";

export const useComments = (id?: number) => {

    const commentsQuery = useQuery({
        queryKey: ['comments', id ],
        queryFn: ({ signal }) => githubGetComments({ signal, id }),
        staleTime: 1000 * 60,
    });

    return {
        commentsQuery
    }
}
