import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MatchingPost, getMatchingPostOne } from '../apis/MatchingPostApis';
import { StyledContainer, PostDiv } from '../components/matchingList/styles';
import { useReadMatchingPost } from '../services/MatchingPostServices';
const DirectMatchingPost = () => {
  const { postId } = useParams();

  const { data: matchingPost, isLoading } = useReadMatchingPost(Number(postId));

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledContainer>
      <PostDiv>
        {matchingPost && (
          <div>
            <div>
              <div>
                <span>{matchingPost.createdAt.slice(0, 10)}</span>
                <span>(학교) (학번)</span>
              </div>
              <div>(매칭완료여부)</div>
            </div>
            <h3>{matchingPost.title}</h3>
            <p>{matchingPost.introduce}</p>
            <div>
              어필 보기
              <div>{matchingPost.appeal}</div>
            </div>
            <button>채팅 해보기</button>
          </div>
        )}
      </PostDiv>
    </StyledContainer>
  );
};
export default DirectMatchingPost;
