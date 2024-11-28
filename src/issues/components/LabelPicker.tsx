import { useQuery } from "@tanstack/react-query";

async function getLabels() {
  const url = `https://api.github.com/repos/facebook/react/labels`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fail API");
    }
    const data = await response.json();
    //console.log('data', data)
    return data;
  } catch (error) {
    console.log('error', error)
  }
}

interface GitHubLabel {
  id: number;
  name: string;
  color: string;
}

export const LabelPicker = () => {

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: () => getLabels()
  });


  if (labelsQuery.isLoading) {
    return <div className="flex justify-center items-center h-52">Loading...</div>
  }

  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>


      {
        labelsQuery.data && labelsQuery.data.map((label: GitHubLabel) => (
          <span
            key={label.id}
            className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
            style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          >
            {label.name}
          </span>
        ))
      }
    </>
  );
};
