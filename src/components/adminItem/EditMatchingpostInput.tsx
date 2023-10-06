import { useState } from 'react';
import {
  PatchMatchingPost,
  postMatchingPost,
} from '../../apis/MatchingPostApis';

const EditMatchingPostInput = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [appeal, setAppeal] = useState('');
  const [appeals, setAppeals] = useState(['', '', '']);

  const handleSubmit = async () => {
    PatchMatchingPost(Number(id), title, introduce, appeals);
    setTitle('');
    setIntroduce('');
    setAppeals(['', '', '']);
    setAppeal('');
  };

  return (
    <>
      <input
        placeholder="아이디"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        placeholder="제목"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="소개"
        type="text"
        value={introduce}
        onChange={(e) => setIntroduce(e.target.value)}
      />
      <input
        placeholder="어필"
        type="text"
        value={appeal}
        onChange={(e) => setAppeal(e.target.value)}
      />
      <button onClick={handleSubmit}>추가하기</button>
    </>
  );
};
export default EditMatchingPostInput;
