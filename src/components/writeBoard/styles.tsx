import styled from '@emotion/styled';

export const WriteBoardBlock = styled.div`
  width: 300px;
  button {
    background-color: white;
    padding: 0;
  }
  img {
    height: 33px;
  }
  label {
    font-weight: bold;
  }
  input[type='text'] {
    background-color: #fbfbfb;
    border: none;
    outline: none;
  }
  background-color: white;
  padding: 40px;
  color: #584744;

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
  width: 100%;
  height: 33px;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #f4f4f4;
  border-radius: 7px;
  color: #584744;
`;
export const Friends = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0px;

  #friends-list {
    padding: 0 5px;
    width: 216px;
    background-color: #fbfbfb;
    display: flex;
    justify-content: space-between;
  }
  button {
    font-size: 20px;
    color: #584744;
  }
`;

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0px;
  label {
    font-weight: bold;
  }
  input {
    width: 216px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin: 4px 0px;
  }
`;

export const Appeal = styled.div`
  p {
    color: #e0e0e0;
    font-size: xx-small;
    margin: 0px 0px -10px 0px;
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
    margin: 17px 4px;
  }
  .appealContent {
    margin: 17px 4px;
    width: 130px;
  }
  .appealCkeck {
    margin: 17px 4px;
    display: none;
  }
`;

//   input[type='checkbox'] {
//     display: none;
//   }
//   input[type='checkbox'] {
//     cursor: pointer;
//     background-repeat: no-repeat;
//     background-image: url('/checkIcon_unChecked.png');
//   }
//   input[type='checkbox']:checked {
//     cursor: pointer;
//     background-image: url('/checkIcon_checked.png');
//   }
