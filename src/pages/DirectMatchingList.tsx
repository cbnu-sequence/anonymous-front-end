import { useEffect, useState } from 'react';
import { Filter } from '../components/matchingList/Filter';
import { List } from '../components/matchingList/List';
import { Container, ListDiv } from '../components/matchingList/styles';
import { MatchingPost, getMatchingPostAll } from '../apis/MatchingPostApis';

const DirectMatchingList = () => {
  const [sortedByDistance, setSortedByDistance] = useState(true);
  const [sortedByRegistrationDate, setSortedByRegistrationDate] =
    useState(false);

  const handleSortedBy = (sortBy: 'distance' | 'registrationDate') => {
    if (sortBy === 'distance') {
      setSortedByDistance(true);
      setSortedByRegistrationDate(false);
      // distance에 따른 정렬 API 호출
    } else if (sortBy === 'registrationDate') {
      setSortedByDistance(false);
      setSortedByRegistrationDate(true);
      // registrationDate에 따른 정렬 API 호출
    }
  };

  // 리스트 아이템: 날짜, 학교, 학번, 제목, 해시태그, 매칭완료여부
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');

  const [posts, setPosts] = useState<MatchingPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMatchingPostAll();
      if (data) {
        setPosts(data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <ListDiv>
          <Filter
            sortedByDistance={sortedByDistance}
            sortedByRegistrationDate={sortedByRegistrationDate}
            handleSortedBy={handleSortedBy}
          />
          <List posts={posts} setPosts={setPosts} />
        </ListDiv>
      </Container>
    </>
  );
};
export default DirectMatchingList;
