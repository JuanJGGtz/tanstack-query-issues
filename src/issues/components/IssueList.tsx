import { IssueItem } from './IssueItem';
interface Props {
  issues: GitHubIssue[]
}
export const IssueList: React.FC<Props> = ({ issues }) => {

  console.log('issye', issues)
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues?.map((issue: GitHubIssue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
