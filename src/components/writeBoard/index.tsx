import React, { useState } from 'react';
import { Block, Editor, Select, Title, Appeal } from './AppStyles';

export const WriteBoard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    document.getElementById('checkIcon').src = '/checkIcon_checked.png';
  };

  return (
    <Block>
      <Title>
        <img src="/xButton.png" />
        <label className="writeBoardMent">새 게시글 작성</label>
        <img src="/createButton.png" />
      </Title>

      <Select>
        <option value="university">충북대학교</option>
        <option value="university">서울대학교</option>
        <option value="university">연세대학교</option>
        <option value="university">한양대학교</option>
      </Select>
      <Select>
        <option value="department">정보통신공학부</option>
        <option value="department">수학과</option>
        <option value="department">국어국문학과</option>
        <option value="department">심리학과</option>
      </Select>
      <Select>
        <option value="gender">여자</option>
        <option value="gender">남자</option>
      </Select>

      <Editor>
        <div className="content">
          <label>제목</label>
          <input type="text" />
        </div>
        <div className="content">
          <label className="title">상세설명</label>
          <input type="text" />
        </div>
      </Editor>

      <Appeal>
        <p className="appealNotice">어필 1개 이상 작성은 필수입니다.</p>

        <div className="appeal">
          <label>어필1</label>
          <select>
            <option value="text">텍스트</option>
            <option value="image">이미지</option>
            <option value="voice">음성</option>
            <option value="video">동영상</option>
          </select>
          <input className="appealContent" type="text" />
          <input className="appealCkeck" type="checkbox" />
        </div>

        <div className="appeal">
          <label>어필2</label>
          <select>
            <option value="text">텍스트</option>
            <option value="image">이미지</option>
            <option value="voice">음성</option>
            <option value="video">동영상</option>
          </select>
          <input className="appealContent" type="text" />
          <input className="appealCkeck" type="checkbox" />
        </div>

        <div className="appeal">
          <label>어필3</label>
          <select>
            <option value="text">텍스트</option>
            <option value="image">이미지</option>
            <option value="voice">음성</option>
            <option value="video">동영상</option>
          </select>
          <input className="appealContent" type="text" />
          <input className="appealCkeck" type="checkbox" />
          <img
            src="/checkIcon_unChecked.png"
            id="checkIcon"
            onClick={handleChecked}
          ></img>
        </div>
      </Appeal>

      {/* <button
          className={`ListBtn ${isChecked ? '' : 'lookbtn'}`}
          onClick={onIsChecked}
        >
          전체 목록
        </button>
        <button
          className={`ListBtn ${isChecked ? 'lookbtn' : ''}`}
          onClick={onIsChecked}
        >
          완료 목록
        </button> */}
    </Block>
  );
};

export default WriteBoard;
