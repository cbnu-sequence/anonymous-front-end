import { useState } from 'react';
import { postMatchingPost } from '../../apis/MatchingPostApis';

import {
  WriteBoardBlock,
  Editor,
  Friends,
  Input,
  Title,
  Appeal,
} from './styles';

export const WriteBoard = () => {
  const [title, setTitle] = useState('');
  const [introduce, setIntroduce] = useState('');
  // const [appeal, setAppeal] = useState('');

  const [isCheckedArray, setIsCheckedArray] = useState([false, false, false]);

  const handleSubmit = async () => {
    postMatchingPost(title, introduce, 'appeal');
    setTitle('');
    setIntroduce('');
    // setAppeal('');
  };

  const handleClick = (index: number) => {
    const newIsCheckedArray = [...isCheckedArray];
    newIsCheckedArray[index] = !newIsCheckedArray[index];
    setIsCheckedArray(newIsCheckedArray);
  };

  return (
    <WriteBoardBlock>
      <Title>
        <img src="/xButton.png" />
        <label className="writeBoardMent">새 게시글 작성</label>
        <button onClick={handleSubmit}>Create</button>
      </Title>

      <Input type="text" name="university" value="충북대학교" disabled />
      <Input type="text" name="department" value="정보통신공학부" disabled />
      <Input type="text" name="class-of" value="20학번" disabled />
      <Input type="text" name="gender" value="여자" disabled />

      <Editor>
        <Friends className="friends">
          <label>친구</label>
          <div id="friends-list">
            <div>친구를 추가해주세요.</div>
            <button>+</button>
          </div>
        </Friends>
        <div className="content">
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="introduce">
          <label>우리 팀 소개</label>
          <textarea
            value={introduce}
            onChange={(e) => setIntroduce(e.target.value)}
          />
        </div>
      </Editor>

      <Appeal>
        <p className="appealNotice">어필 1개 이상 작성은 필수입니다.</p>

        <div className="appeal">
          <label>어필1</label>
          <select>
            <option value="text">텍스트</option>
            <option value="image">이미지</option>
            <option value="voice">음성</option>
            <option value="video">동영상</option>
          </select>
          <input className="appealContent" type="text" />
          <img
            key="1"
            src={
              isCheckedArray[0]
                ? '/checkIcon_checked.png'
                : '/checkIcon_unChecked.png'
            }
            id="checkIcon_0"
            onClick={() => handleClick(0)}
          ></img>
        </div>

        <div className="appeal">
          <label>어필2</label>
          <select>
            <option value="text">텍스트</option>
            <option value="image">이미지</option>
            <option value="voice">음성</option>
            <option value="video">동영상</option>
          </select>
          <input className="appealContent" type="text" />
          <img
            key="2"
            src={
              isCheckedArray[1]
                ? '/checkIcon_checked.png'
                : '/checkIcon_unChecked.png'
            }
            id="checkIcon_1"
            onClick={() => handleClick(1)}
          ></img>
        </div>

        <div className="appeal">
          <label>어필3</label>
          <select>
            <option value="text">텍스트</option>
            <option value="image">이미지</option>
            <option value="voice">음성</option>
            <option value="video">동영상</option>
          </select>
          <input className="appealContent" type="text" />
          <img
            key="3"
            src={
              isCheckedArray[2]
                ? '/checkIcon_checked.png'
                : '/checkIcon_unChecked.png'
            }
            id="checkIcon_2"
            onClick={() => handleClick(2)}
          ></img>
        </div>
      </Appeal>
    </WriteBoardBlock>
  );
};

export default WriteBoard;
