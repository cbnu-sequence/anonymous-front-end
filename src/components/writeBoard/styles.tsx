import styled from '@emotion/styled';

export const WriteBoardBlock = styled.div`
  width: 300px;
  background-color: white;
  padding: 40px;
  color: #584744;
  button {
    padding: 0px;
  }
  img {
    height: 27px;
  }
  label {
    font-weight: bold;
  }
  input[type='text'] {
    border: 1px solid #f4f4f4;
    outline: none;
  }
  .ListBtn {
    width: 30px;
    height: 30px;
    color: red;
  }
  .lookBtn {
    width: 30px;
    height: 30px;
    color: red;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;
  .writeBoardMent {
    margin-right: 70px;
    font-size: large;
  }
  button {
    color: #74e28c;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 90%;
  margin-bottom: 10px;
  padding: 0 10px;
  height: 33px;
  background-color: #fbfbfb;
  border-radius: 7px;
  color: #584744;
`;
export const Friends = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0px;

  #friends-list {
    padding: 0 5px;
    width: 80%;
    height: 34px;
    border: 1px solid #f4f4f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
  button {
    font-size: 27px;
    color: #584744;
  }
`;

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;

  label {
    font-weight: bold;
    font-size: 18px;
  }
  input {
    width: 80%;
    height: 34px;
    padding: 0 5px;
    border-radius: 5px;
    background-color: #ffffff;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0px;
  }
  .introduce {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 4px 0px;
    textarea {
      margin-top: 4px;
      width: 93%;
      height: 100px;
    }
  }
`;

export const Appeal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    color: #e0e0e0;
    font-size: xx-small;
    text-align: left;
  }
  .appeal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  select {
    width: 56px;
    height: 26px;
    border-radius: 10px;
    border: none;
    background-color: #584744;
    color: white;
    font-size: xx-small;
    font-weight: bold;
    padding-left: 5px;
  }
  .appealContent {
    width: 130px;
    background-color: #ffffff;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
  }
`;
