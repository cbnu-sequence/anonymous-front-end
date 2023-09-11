import React, { useState } from 'react';
import {
  WriteBoardBlock,
  Editor,
  Friends,
  Input,
  Title,
  Appeal,
} from './styles';

export const WriteBoard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <WriteBoardBlock>
      <Title>
        <img src="/xButton.png" />
        <label className="writeBoardMent">새 게시글 작성</label>
        <button>Create</button>
      </Title>

      <Input type="text" name="university" value="충북대학교" disabled />
      <Input type="text" name="department" value="정보통신공학부" disabled />
      <Input type="text" name="class-of" value="20학번" disabled />
      <Input type="text" name="gender" value="여자" disabled />

      <Editor>
        <Friends className="friends">
          <label>친구</label>
          <div id="friends-list">
            <div></div>
            <button>+</button>
          </div>
        </Friends>
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
            src={
              isChecked ? '/checkIcon_checked.png' : '/checkIcon_unChecked.png'
            }
            id="checkIcon"
            onClick={handleClick}
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
    </WriteBoardBlock>
  );
};

export default WriteBoard;
