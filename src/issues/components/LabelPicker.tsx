import { GitHubLabel } from "../../interface/label.interface";
import { useLabels } from "../hooks/useLabels";

interface LabelPickerProps {
  filters: string[]
  handleChangeFilter: (filter: any) => void;
}

export const LabelPicker = ({ handleChangeFilter, filters }: LabelPickerProps) => {

  const { labelsQuery } = useLabels();



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
        labelsQuery.data && labelsQuery.data.map((label: GitHubLabel) => {

          const cssProperties = [
            {
              backgroundColor: `#${label.color}`,
              color: `white`,
            },
            {
              backgroundColor: 'none',
              color: `#${label.color}`,
            },
          ];

          const backgroundColor = `${filters?.indexOf(String(label.id)) == -1 ? cssProperties[1] : cssProperties[0]}`;

          return (
            <span
              key={label.id}
              className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn"
              style={{ ...backgroundColor, border: `1px solid #${label.color}`, color: `#${label.color}` }}
              onClick={() => handleChangeFilter(label.id)}
            >
              {label.name}
            </span>
          )
        })
      }
    </>
  );
};
