import { MatchingPost } from '../../apis/MatchingPostApis';
import { ListItemLink, CreateInfo, WriterInfo } from './styles';

type ListItemProps = {
  post: MatchingPost;
};

export const ListItem: React.FC<ListItemProps> = ({ post }) => {
  return (
    <>
      <ListItemLink to={`/match/direct/${post.id}`}>
        <CreateInfo>
          <WriterInfo>
            <span>{post.createdAt.slice(0, 10)}</span>
            <span>(학교) (학번)</span>
          </WriterInfo>
          <div>(매칭완료여부)</div>
        </CreateInfo>
        <h3>{post.title}</h3>
        <p>(해시태그들)</p>
        <hr />
      </ListItemLink>
    </>
  );
};
