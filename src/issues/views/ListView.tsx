import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';


export type IssueState = 'all' | 'open' | 'closed';

export const States: Record<IssueState, IssueState> = {
  all: 'all',
  open: 'open',
  closed: 'closed'
} as const;




export const ListView = () => {
  const [state, setState] = useState<IssueState>(States.all);
  const [filters, setFilters] = useState({});

  const { issueQuery: { isLoading, data = [] } } = useIssues(
    state,
  );

  if (isLoading) {
    return <div className="flex justify-center items-center">
      <p>Cargando issues...</p>
    </div>
  }

  const issues = state === States.all
    ? data
    : data.filter(issue => issue.state === state);


  const handleChangeState = (event: React.MouseEvent<HTMLButtonElement>) => {
    setState(event.currentTarget.name as IssueState);
  };

  const handleChangeFilter = (filter: any) => {
    setFilters((prevValue) => ({ ...prevValue, ...filter }))
  }
  
  console.log('filters', filters)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <IssueList state={state} issues={issues} handleChangeState={handleChangeState} />
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker handleChangeFilter={handleChangeFilter} />
      </div>
    </div>
  );
};
