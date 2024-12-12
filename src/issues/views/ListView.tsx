import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';


type IssueState = 'all' | 'open' | 'closed';

const States: Record<IssueState, IssueState> = {
  all: 'all',
  open: 'open',
  closed: 'closed'
} as const;



export const ListView = () => {
  const [btnState, setBtnState] = useState<IssueState>(States.all);

  const { issueQuery: { isLoading, data = [] } } = useIssues();

  if (isLoading) {
    return <div className="flex justify-center items-center">
      <p>Cargando issues...</p>
    </div>
  }

  const issues = btnState === States.all
    ? data
    : data.filter(issue => issue.state === btnState);


  const handleChangeState = (event: React.MouseEvent<HTMLButtonElement>) => {
    setBtnState(event.currentTarget.name as IssueState);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <IssueList btnState={btnState} issues={issues} handleChangeState={handleChangeState} />
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  );
};
