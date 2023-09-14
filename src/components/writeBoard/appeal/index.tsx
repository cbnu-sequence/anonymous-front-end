import { useState } from 'react';
import Select from './Select';
import { Text, AudioRecord, Image, Video } from './SelectItem';
import { AppealBlock } from '../styles';

const Appeal = ({ isCheckedArray, setIsCheckedArray }: any) => {
  const [selectedOptions, setSelectedOptions] = useState([
    'Text',
    'Text',
    'Text',
  ]);
  const [selectedComponents, setSelectedComponents] = useState([
    <Text />,
    <Text />,
    <Text />,
  ]);
  const handleOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    let selectedComponent = <Text />;

    switch (event.target.value) {
      case 'Text':
        selectedComponent = <Text />;
        break;
      case 'Image':
        selectedComponent = <Image />;
        break;
      case 'AudioRecord':
        selectedComponent = <AudioRecord />;
        break;
      case 'Video':
        selectedComponent = <Video />;
        break;
      default:
        selectedComponent = <Text />;
    }

    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);

    setSelectedComponents((prevComponents) => {
      const newComponents = [...prevComponents];
      newComponents[index] = selectedComponent;
      return newComponents;
    });
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
          {selectedComponents[index]}
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
