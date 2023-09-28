import styled from '@emotion/styled';
import { MatchingPost } from '../../apis/MatchingPostApis';
import MatchingListItem from './MatchingListItem';

type TProps = {
  posts: MatchingPost[];
};
const MatchingList: React.FC<TProps> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <MatchingListItem key={index} post={post} />
        ))}
    </>
  );
};

export default MatchingList;
