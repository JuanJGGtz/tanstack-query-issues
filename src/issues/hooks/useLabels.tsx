import { useQuery } from "@tanstack/react-query";
import { githubGetLabels } from "../../actions/get-labels.action";

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: () => githubGetLabels(),
        staleTime: 1000 * 60 * 60,//1hora, no vuelve a pedir la data porque la tiene en memoria
        //Se muestra data de manera momentanea que no cambia contantemente
        placeholderData: [
            {
                "id": 791921801,
                "node_id": "MDU6TGFiZWw3OTE5MjE4MDE=",
                "url": "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
                "name": "❤️",
                "color": "ffffff",
                "default": false,
            },
            {
                "id": 69105383,
                "node_id": "MDU6TGFiZWw2OTEwNTM4Mw==",
                "url": "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
                "name": "Browser: IE",
                "color": "c7def8",
                "default": false,
            },
        ]
    });
    return {
        labelsQuery,
    }
}
