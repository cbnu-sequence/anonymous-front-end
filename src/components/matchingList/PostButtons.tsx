import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

type TProps = {
  handleDeleteButton: () => void;
};

const PostButtons: React.FC<TProps> = ({ handleDeleteButton }) => {
  return (
    <StyledWrapper>
      <Link to="/">
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
  button {
    font-size: 12px;
    padding: 5px 7px;
    color: gray;
  }
`;
export default PostButtons;
