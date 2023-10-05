import { CharacterCounter } from '../components/CharacterCounter';
import DeleteMatchingPost from '../components/adminItem/DeleteMatchingPost';
import MatchingPostInput from '../components/adminItem/MatchingPostInput';
import MatchingPosts from '../components/adminItem/MatchingPosts';

const Admin = () => {
  return (
    <>
      <h3>리코일 정상작동 확인</h3>
      <CharacterCounter />
      <br />
      <div>
        <h3>MatchingPost</h3>
        <ul>
          <li>매칭 포스트 생성</li>
          <MatchingPostInput />
          <li>모든 매칭 포스트 조회 & 단건 조회</li>
          <MatchingPosts />
          <li>매칭 포스트 수정</li>
          <div>
            삭제할 id:
            <DeleteMatchingPost />
          </div>
          <li>매칭 포스트 삭제</li>
          <li>특정 유저 초대</li>
        </ul>
      </div>
    </>
  );
};
export default Admin;
