import axios from 'axios';
import { useState } from 'react';
import { postMachingPost } from '../apis/MachingPostApis';

const MatchingPost = () => {
  const [title, setTitle] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [appeal, setAppeal] = useState('');

  const handleSubmit = async () => {
    postMachingPost(title, introduce, appeal);
    setTitle('');
    setIntroduce('');
    setAppeal('');
  };

  return (
    <>
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
export default MatchingPost;
