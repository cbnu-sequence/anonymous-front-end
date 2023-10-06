import { useNavigate, useParams } from 'react-router-dom';
import {
  useReadMatchingPost,
  useUpdateMatchingPost,
} from '../services/MatchingPostServices';
import { useState } from 'react';
import Appeal from '../components/writeBoard/appeal';
import {
  WriteBoardBlock,
  Editor,
  Friends,
  Input,
  Title,
} from '../components/writeBoard/styles';

const DirectMatchingEdit = () => {
  const { editId } = useParams();
  const navigate = useNavigate();

  const { data: matchingPostData, isLoading } = useReadMatchingPost(
    Number(editId),
  );
  if (isLoading) return <div>Loading...</div>;
  if (matchingPostData === undefined) return <>올바른 경로가 아닙니다.</>;

  const [title, setTitle] = useState(matchingPostData.title);
  const [introduce, setIntroduce] = useState(matchingPostData.introduce);
  const [appeal, setAppeal] = useState([...matchingPostData.appeal]);

  const [isCheckedArray, setIsCheckedArray] = useState([false, false, false]);

  const updateMutation = useUpdateMatchingPost();

  const handleSubmit = async () => {
    const updatedData = { ...matchingPostData, title, introduce, appeal };
    await updateMutation.mutateAsync(updatedData);

    navigate('/match/direct');
  };

  return (
    <WriteBoardBlock>
      <Title>
        <img src="/xButton.png" />
        <label className="writeBoardMent">새 게시글 작성</label>
        <button onClick={handleSubmit}>Update</button>
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
        appeal={appeal}
        setAppeal={setAppeal}
        isCheckedArray={isCheckedArray}
        setIsCheckedArray={setIsCheckedArray}
        handleSubmit={handleSubmit}
      />
    </WriteBoardBlock>
  );
};

export default DirectMatchingEdit;
