import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { MatchingPost } from '../../apis/MatchingPostApis';

type TProps = {
  post: MatchingPost;
};

const ListItem: React.FC<TProps> = ({ post }) => {
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

const ListItemLink = styled(Link)`
  h3 {
    text-align: left;
    font-weight: 300;
    margin: 5px 0;
  }
  span {
    margin-right: 7px;
  }
  p {
    text-align: right;
    font-size: 12px;
    margin: 5px 0;
  }
  hr {
    margin: 8px 0 15px 0;
    color: #d6d6d6; // 적용 안 됨
  }
`;

const CreateInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin: 5px 0;
`;
const WriterInfo = styled.div`
  display: flex;
  align-items: center;
`;
export default ListItem;
