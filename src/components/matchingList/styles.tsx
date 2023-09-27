import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  position: relative;
  width: 380px;
  height: 760px;
  background-color: #74e28c;
`;

export const UniversityInfoDiv = styled.div`
  height: 30px;
  width: 100%;
`;

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

export const FilterDiv = styled.div`
  width: 147px;
  height: 60px;
  justify-content: space-between;
`;

const activeButtonStyles = css`
  background-color: #74e28c;
  color: #ffffff;
`;

const inactiveButtonStyles = css`
  background-color: #ffffff;
  color: #74e28c;
`;

export const StyledButton = styled.button<{ isActive: boolean }>`
  width: 70px;
  height: 22px;
  padding: 1.5px;
  font-size: 1px;
  font-weight: 600;
  border: 1px solid #74e28c;
  border-radius: 3px;
  ${(props) => (props.isActive ? activeButtonStyles : inactiveButtonStyles)}
`;
