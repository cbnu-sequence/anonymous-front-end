import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useDeleteMatchingPost } from '../../services/MatchingPostServices';

type TProps = {
  postId: string | undefined;
};

const PostActions: React.FC<TProps> = ({ postId }) => {
  const deleteMutation = useDeleteMatchingPost(Number(postId));

  const handleDeleteButton = () => {
    deleteMutation.mutate();
  };

  return (
    <StyledWrapper>
      <Link to={`/match/direct/edit/${postId}`}>
        <button>수정</button>
      </Link>
      <Link to="/match/direct">
        <button onClick={handleDeleteButton}>삭제</button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  margin: 20px 0 0 10px;
  button {
    font-size: 12px;
    padding: 5px 7px;
    color: gray;
  }
`;
export default PostActions;
