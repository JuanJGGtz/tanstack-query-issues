import { GitHubIssue } from '../../interface/issues.interface';
import { IssueItem } from './IssueItem';

interface Props {
  issues: GitHubIssue[];
  handleChangeState?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnState: IssueState;
}

// Definir tipos y constantes
type IssueState = 'all' | 'open' | 'closed';

const ISSUE_STATES: IssueState[] = ['all', 'open', 'closed'];

const BUTTON_LABELS: Record<IssueState, string> = {
  all: 'All',
  open: 'Open',
  closed: 'Closed'
};

export const IssueList: React.FC<Props> = ({ btnState, issues, handleChangeState }) => {

  return (
    <>
      <div className="flex gap-4">
        {ISSUE_STATES.map(state => (
          <button
            key={state}
            onClick={handleChangeState}
            name={state}
            className={`btn ${btnState === state ? 'active' : ''}`}
          >
            {BUTTON_LABELS[state]}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
