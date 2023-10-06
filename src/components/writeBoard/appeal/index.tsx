import { useState } from 'react';
import Select from './Select';
import { Text, AudioRecord, Image, Video } from './SelectItem';
import { AppealBlock } from '../styles';

const Appeal = ({
  isCheckedArray,
  setIsCheckedArray,
  setAppeal,
  appeal,
}: any) => {
  const [selectedOptions, setSelectedOptions] = useState([
    'Text',
    'Text',
    'Text',
  ]);

  const optionComponents = (index: number, isChecked: boolean) => {
    const components: Record<string, JSX.Element> = {
      Text: (
        <Text
          appeal={appeal}
          setAppeal={setAppeal}
          index={index}
          isChecked={isChecked}
        />
      ),
      Image: <Image />,
      AudioRecord: <AudioRecord />,
      Video: <Video />,
    };

    return components[selectedOptions[index]] || <Text />;
  };

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };
  const handleClick = (index: number) => {
    const newIsCheckedArray = [...isCheckedArray];
    newIsCheckedArray[index] = !newIsCheckedArray[index];
    setIsCheckedArray(newIsCheckedArray);
  };

  return (
    <AppealBlock>
      <p className="appealNotice">어필 1개 이상 작성은 필수입니다.</p>
      {isCheckedArray.map((isChecked: boolean, index: number) => (
        <div className="appeal" key={index}>
          <div className="appealType">
            <label>{`어필${index + 1}`}</label>
            <Select
              selectedOption={selectedOptions[index]}
              handleOptionChange={(
                event: React.ChangeEvent<HTMLSelectElement>,
              ) => handleOptionChange(event, index)}
            />
          </div>
          {optionComponents(index, isChecked)}
          <img
            src={
              isChecked ? '/checkIcon_checked.png' : '/checkIcon_unChecked.png'
            }
            id={`checkIcon_${index}`}
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
    </AppealBlock>
  );
};
export default Appeal;
