import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
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

export const PostDiv = styled(ListDiv)`
  height: 610px;
`;

export const ListItemLink = styled(Link)`
  h3 {
    text-align: left;
    font-weight: 300;
    margin: 5px 0;
  }
  span {
    margin-right: 7px;
  }
  p {
    text-align: right;
    font-size: 12px;
    margin: 5px 0;
  }
  hr {
    margin: 8px 0 15px 0;
    color: #d6d6d6; // 적용 안 됨
  }
`;

export const CreateInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin: 5px 0;
`;
export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterDiv = styled.div`
  width: 147px;
  height: 50px;
  display: flex;
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
  font-size: 10px;
  font-weight: 600;
  border: 1px solid #74e28c;
  border-radius: 3px;
  ${(props) => (props.isActive ? activeButtonStyles : inactiveButtonStyles)}
`;
