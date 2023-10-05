import styled from '@emotion/styled';
import { css } from '@emotion/react';

type TProps = {
  isSortedByDistance: boolean;
  isSortedByRegistrationDate: boolean;
  handleSortedBy: (sortBy: 'distance' | 'registrationDate') => void;
};

const MatchingListSortingFilter: React.FC<TProps> = ({
  isSortedByDistance,
  isSortedByRegistrationDate,
  handleSortedBy,
}) => {
  return (
    <StyledWrapper>
      <StyledButton
        isActive={isSortedByDistance}
        onClick={() => handleSortedBy('distance')}
      >
        가까운 거리 순
      </StyledButton>
      <StyledButton
        isActive={isSortedByRegistrationDate}
        onClick={() => handleSortedBy('registrationDate')}
      >
        최근 등록 순
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 147px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const activeButtonStyles = css`
  background-color: #74e28c;
  color: #ffffff;
`;

const inactiveButtonStyles = css`
  background-color: #ffffff;
  color: #74e28c;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
  width: 70px;
  height: 22px;
  padding: 1.5px;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid #74e28c;
  border-radius: 3px;
  ${(props) => (props.isActive ? activeButtonStyles : inactiveButtonStyles)}
`;

export default MatchingListSortingFilter;
