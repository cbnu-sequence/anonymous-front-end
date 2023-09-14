import { useState } from 'react';
import { postMatchingPost } from '../../apis/MatchingPostApis';
import Appeal from './appeal';

import { WriteBoardBlock, Editor, Friends, Input, Title } from './styles';

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
      <Appeal
        isCheckedArray={isCheckedArray}
        setIsCheckedArray={setIsCheckedArray}
      />
    </WriteBoardBlock>
  );
};

export default WriteBoard;
