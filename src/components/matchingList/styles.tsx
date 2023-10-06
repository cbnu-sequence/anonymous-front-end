import styled from '@emotion/styled';

export const ListDiv = styled.div`
  position: absolute;
  padding: 25px;
  bottom: 0;
  width: calc(100% - 50px);
  height: 560px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.1);
`;
export const PostDiv = styled(ListDiv)`
  height: 610px;
`;
