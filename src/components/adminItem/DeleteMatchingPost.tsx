import { useState } from 'react';
import { deleteMatchingPost } from '../../apis/MatchingPostApis';
import { useDeleteMatchingPost } from '../../services/MatchingPostServices';

const DeleteMatchingPost = () => {
  const [id, setId] = useState('');
  const deleteMutation = useDeleteMatchingPost(Number(id));

  const handleDelete = () => {
    deleteMutation.mutate();
  };
  return (
    <>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>삭제</button>
    </>
  );
};
export default DeleteMatchingPost;
