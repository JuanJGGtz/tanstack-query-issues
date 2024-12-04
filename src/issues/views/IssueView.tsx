import { useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { FiSkipBack } from 'react-icons/fi';
import { useIssue } from '../hooks/useIssue';
import { useComments } from '../hooks/useComments';

export const IssueView = () => {
  const params = useParams<{ id: string }>();
  const { issueQuery } = useIssue(Number(params.id));
  const { data: issue, isLoading: isIssueLoading, isError: isIssueError} = issueQuery
  
  const issueNumber = Number(issue?.number || 0);
  const { commentsQuery } = useComments(issueNumber);
  const { data: comments, isLoading: areCommentsLoading, isError: isCommentsError } = commentsQuery;


  const navigate = useNavigate();

  if (isIssueLoading || areCommentsLoading) {
    return <div>Cargando...</div>;
  }

  if (isIssueError || isCommentsError) {
    return <div>Ha ocurrido un error al cargar la información</div>;
  }

  if (!issue) {
    return <div>No se encontró el issue</div>;
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>
      <IssueComment
        body={issue.body}
        avatar_url={issue.user.avatar_url}
        login={issue.user.login}
      />

      {comments?.map((comment) => (
        <IssueComment
          key={comment.id}
          body={comment.body}
          avatar_url={comment.user.avatar_url}
          login={comment.user.login}
        />
      ))}
    </div>
  );
};
