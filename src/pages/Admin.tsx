import { CharacterCounter } from '../components/CharacterCounter';

const Admin = () => {
  return (
    <>
      <h3>리코일 정상작동 확인</h3>
      <CharacterCounter />
      <br />
      <div>
        <h3>MachingPost</h3>
        <ul>
          <li>매칭 포스트 생성</li>
          <li>모든 매칭 포스트 조회</li>
          <li>단건 매칭 포스트 조회</li>
          <li>매칭 포스트 수정</li>
          <li>매칭 포스트 삭제</li>
          <li>특정 유저 초대</li>
        </ul>
      </div>
    </>
  );
};
export default Admin;
