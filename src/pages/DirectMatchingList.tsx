import { useState } from 'react';
import { Filter } from '../components/matchingList/Filter';
import { List } from '../components/matchingList/List';
import { Container, ListDiv } from '../components/matchingList/styles';

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

  return (
    <>
      <Container>
        <ListDiv>
          <Filter
            sortedByDistance={sortedByDistance}
            sortedByRegistrationDate={sortedByRegistrationDate}
            handleSortedBy={handleSortedBy}
          />
          <List />
        </ListDiv>
      </Container>
    </>
  );
};
export default DirectMatchingList;
