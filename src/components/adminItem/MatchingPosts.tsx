import { useState } from 'react';
import {
  MatchingPost,
  getMatchingPostAll,
  getMatchingPostOne,
} from '../../apis/MatchingPostApis';

const MatchingPosts = () => {
  const [posts, setPosts] = useState<MatchingPost[]>([]);
  const handleClick = async () => {
    const data = await getMatchingPostAll();
    if (data) {
      setPosts(data);
    }
  }; // 전체 조회

  const [post, setPost] = useState<MatchingPost[]>([]);
  const [id, setId] = useState(0);
  const handleClickId = async () => {
    const data = await getMatchingPostOne(id);
    if (data) {
      setPost([data]);
    }
  }; // 단건 조회

  return (
    <>
      <button onClick={handleClick}>MatchingPosts 전체 조회</button>
      <div>
        {posts &&
          posts.map((post, index) => <p key={index}>title: {post.title}</p>)}
      </div>
      <input
        placeholder="검색할id"
        type="number"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <button onClick={handleClickId}>조회</button>
      {post.length > 0 && <div>{post[0].title}</div>}
    </>
  );
};

export default MatchingPosts;
