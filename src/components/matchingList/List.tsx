import { MatchingPost } from '../../apis/MatchingPostApis';
import { ListItem } from './ListItem';

type ListProps = {
  posts: MatchingPost[];
  setPosts: React.Dispatch<React.SetStateAction<MatchingPost[]>>;
};
export const List: React.FC<ListProps> = ({ posts, setPosts }) => {
  return (
    <>
      <div>
        {posts &&
          posts.map((post, index) => <ListItem key={index} post={post} />)}
      </div>
    </>
  );
};
