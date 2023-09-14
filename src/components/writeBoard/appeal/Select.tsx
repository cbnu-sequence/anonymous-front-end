const Select = ({ selectedOption, handleOptionChange }: any) => {
  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="Text">텍스트</option>
      <option value="Image">이미지</option>
      <option value="AudioRecord">음성</option>
      <option value="Video">동영상</option>
    </select>
  );
};
export default Select;
