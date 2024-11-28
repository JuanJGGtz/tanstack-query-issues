import { useEffect, useState } from "react";

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

  const [labels, setLabels] = useState<GitHubLabel[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getLabels();
      setLabels(data);
    };

    getData();
  }, []);

  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
      {
        labels && labels.map((label: GitHubLabel, index) => (
          <span
            key={index}
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
