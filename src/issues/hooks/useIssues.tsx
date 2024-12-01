import { useQuery } from "@tanstack/react-query"
import { githubGetIssues } from "../../actions/get-issues.action"

export const useIssues = () => {
    const {data} = useQuery({
        queryKey: ['issues'],
        queryFn: () => githubGetIssues(),
    })


    return {
        data,
    }
}
