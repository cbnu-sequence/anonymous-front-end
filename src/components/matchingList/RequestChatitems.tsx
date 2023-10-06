import { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const RequestChatItems = () => {
  return (
    <StyledWrapper>
      <textarea
        placeholder="자신의 팀에 대한 간략한 소개를 적어 
첫 메세지를 보내보세요!"
      ></textarea>
      <Link to="/match/direct">
        <StyledButton>Send</StyledButton>
      </Link>
    </StyledWrapper>
  );
};

const StyledButton = styled.button`
  background-color: #74e28c;
  width: 100%;
  color: #ffffff;
`;
const StyledWrapper = styled.div`
  textarea {
    padding: 20px;
    width: calc(100% - 48px);
    height: 150px;
    border: 3px solid #74e28c;
    border-radius: 11px;
    margin-bottom: 10px;
  }
`;
export default RequestChatItems;
