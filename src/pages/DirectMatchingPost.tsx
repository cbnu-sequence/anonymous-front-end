import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MatchingPost, getMatchingPostOne } from '../apis/MatchingPostApis';
import { Container, PostDiv } from '../components/matchingList/styles';
const DirectMatchingPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<MatchingPost | null>(null);

  useEffect(() => {
    const fatchData = async () => {
      console.log(postId);
      const data = await getMatchingPostOne(Number(postId));
      if (data) {
        setPost(data);
      }
      console.log('gg', post);
    };
    fatchData();
  }, [postId]);

  return (
    <Container>
      <PostDiv>
        {post && (
          <div>
            <div>
              <div>
                <span>{post.createdAt.slice(0, 10)}</span>
                <span>(학교) (학번)</span>
              </div>
              <div>(매칭완료여부)</div>
            </div>
            <h3>{post.title}</h3>
            <p>{post.introduce}</p>
            <div>
              어필 보기
              <div>{post.appeal}</div>
            </div>
            <button>채팅 해보기</button>
          </div>
        )}
      </PostDiv>
    </Container>
  );
};
export default DirectMatchingPost;
