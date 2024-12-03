import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks/useIssues';

export const ListView = () => {

  const { issueQuery } = useIssues();

  if (issueQuery?.isLoading) {
    return <p>Is loading...</p>
  }

  const issues = issueQuery.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        <IssueList issues={issues} />
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  );
};
