import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { PostDiv } from '../components/matchingList/styles';
import { GreenContainer } from '../components/styledContainer';
import { useReadMatchingPost } from '../services/MatchingPostServices';
import PostActions from '../components/matchingList/PostActions';
import AppealTabs from '../components/matchingList/AppealTabs';

const DirectMatchingPost = () => {
  const { postId } = useParams();

  const { data: matchingPost, isLoading } = useReadMatchingPost(Number(postId));

  if (isLoading) return <div>Loading...</div>;

  return (
    <GreenContainer>
      <PostDiv>
        {matchingPost && (
          <StyledWrapper>
            <CreateInfo>
              <div>
                <span>{matchingPost.createdAt.slice(0, 10)}</span>
                <span>(학교) (학번)</span>
              </div>
              <div>
                <div>(매칭완료여부)</div>
                <PostActions postId={postId} />
              </div>
            </CreateInfo>
            <h3>{matchingPost.title}</h3>
            <p>{matchingPost.introduce}</p>
            <AppealDiv>
              <p>어필 보기</p>
              <AppealTabs appealArr={matchingPost.appeal} />
            </AppealDiv>
            <Link to={`/match/direct/${postId}/request-chat`}>
              <StyledButton>채팅 해보기</StyledButton>
            </Link>
          </StyledWrapper>
        )}
      </PostDiv>
    </GreenContainer>
  );
};

const StyledWrapper = styled.div`
  h3 {
    margin-left: 5px;
    margin-top: 0;
    text-align: left;
  }
  p {
    text-align: left;
  }
`;
const CreateInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AppealDiv = styled.div`
  p {
    margin-top: 45px;
  }
`;

const StyledButton = styled.button`
  background-color: #74e28c;
  width: 100%;
  color: #ffffff;
`;
export default DirectMatchingPost;
