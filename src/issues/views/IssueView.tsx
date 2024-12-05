import { useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { FiSkipBack } from 'react-icons/fi';
import { useIssue } from '../hooks/useIssue';

export const IssueView = () => {
  const params = useParams<{ id: string }>();
  const { issueQuery, commentsQuery } = useIssue(Number(params.id));
  const { data: issue, isLoading: isIssueLoading, isError: isIssueError } = issueQuery
  const { data: comments, isLoading: areCommentsLoading, isError: isCommentsError } = commentsQuery;


  const navigate = useNavigate();

  if (isIssueLoading) {
    return <div>Cargando...</div>;
  }

  if (isIssueError) {
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
        issue={issue}
      />

      {
        areCommentsLoading && <div>Loading Comments...</div>
      }
      {
        isCommentsError && <div>Error en Comments...</div>
      }

      {comments?.map((comment) => (
        <IssueComment
          key={comment.id}
          issue={comment}
        />
      ))}
    </div>
  );
};
