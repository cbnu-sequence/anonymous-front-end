import styled from '@emotion/styled';
import RequestChatItems from '../components/matchingList/RequestChatitems';
import { WhiteContainer } from '../components/styledContainer';

const DirectRequestChat = () => {
  return (
    <WhiteContainer>
      <StyledWrapper>
        <RequestChatItems />
      </StyledWrapper>
    </WhiteContainer>
  );
};

const StyledWrapper = styled.div`
  padding: 25px;
`;
export default DirectRequestChat;
