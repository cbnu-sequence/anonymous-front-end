import { FilterDiv, StyledButton } from './styles';

type FilterProps = {
  sortedByDistance: boolean;
  sortedByRegistrationDate: boolean;
  handleSortedBy: (sortBy: 'distance' | 'registrationDate') => void;
};

export const Filter: React.FC<FilterProps> = ({
  sortedByDistance,
  sortedByRegistrationDate,
  handleSortedBy,
}) => {
  return (
    <>
      <FilterDiv>
        <StyledButton
          isActive={sortedByDistance}
          onClick={() => handleSortedBy('distance')}
        >
          가까운 거리 순
        </StyledButton>
        <StyledButton
          isActive={sortedByRegistrationDate}
          onClick={() => handleSortedBy('registrationDate')}
        >
          최근 등록 순
        </StyledButton>
      </FilterDiv>
    </>
  );
};
