import styled from '@emotion/styled';
import { useState } from 'react';

interface TabNumberProps {
  active: boolean;
  onClick: () => void;
}
interface TProps {
  appealArr: string[];
}
const AppealTabs: React.FC<TProps> = ({ appealArr }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <TabMenus>
        <TabNumber active={activeTab === 1} onClick={() => handleTabClick(1)}>
          <span>1</span>
        </TabNumber>
        <TabNumber active={activeTab === 2} onClick={() => handleTabClick(2)}>
          <span>2</span>
        </TabNumber>
        <TabNumber active={activeTab === 3} onClick={() => handleTabClick(3)}>
          <span>3</span>
        </TabNumber>
      </TabMenus>

      {activeTab === 1 && (
        <TabContent>
          {appealArr[0] ? appealArr[0] : '입력된 내용이 없습니다.'}
        </TabContent>
      )}
      {activeTab === 2 && (
        <TabContent>
          {appealArr[1] ? appealArr[1] : '입력된 내용이 없습니다.'}
        </TabContent>
      )}
      {activeTab === 3 && (
        <TabContent>
          {appealArr[2] ? appealArr[2] : '입력된 내용이 없습니다.'}
        </TabContent>
      )}
    </>
  );
};
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabMenus = styled(FlexDiv)`
  padding: 20px;
  justify-content: space-between;
`;

const TabNumber = styled(FlexDiv)<TabNumberProps>`
  color: ${(props) => (props.active ? '#584744' : '#ffffff')};
  background-color: ${(props) => (props.active ? '#ffffff' : '#584744')};
  border: 2px solid #584744;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 1px 3px 5px #d6d3d3;
  font-size: 35px;
  font-weight: 900;
  span {
    margin-bottom: 3px;
  }
`;

const TabContent = styled(FlexDiv)`
  border: 3px solid #584744;
  border-radius: 10px;
  height: 150px;
  box-shadow: 1px 3px 5px #d6d3d3;
  margin-bottom: 20px;
`;

export default AppealTabs;
