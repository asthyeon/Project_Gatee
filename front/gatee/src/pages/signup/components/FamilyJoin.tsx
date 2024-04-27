import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function FamilyJoin() {
  const [isCodeEntered, setIsCodeEntered] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEnter = (): void => {
    setIsCodeEntered(true);
  };

  const handleExit = (): void => {
    setIsCodeEntered(false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    setInputValue(value);
  }

return (
  <div className="familyJoin">
    {!isCodeEntered ? (
      <div className="familyJoin__codeInput">
        <div className="familyJoin__codeInput__spanBox">
          <span className="familyJoin__codeInput__spanBox__span1">
            가족코드를 입력
          </span>
          <span className="familyJoin__codeInput__spanBox__span2">
            해 주세요
          </span>
        </div>
        <div className="familyJoin__codeInput__inputBox">
          <input
            className="familyJoin__codeInput__inputBox__input"
            type="text"
            pattern="[가-힣]*"
            placeholder="EX) A43959FE "
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
          />
        </div>
        <div className="familyJoin__codeInput__inputButtonBox">
          <button
            className="familyJoin__codeInput__inputButtonBox__inputButton"
            onClick={handleEnter}
          >
            <span className="familyJoin__codeInput__inputButtonBox__inputButton__span">
              입력하기
            </span>
          </button>
        </div>
      </div>
    ) : (
      <div className="familyJoin__codeResult">
        <div className="familyJoin__codeResult__imageBox">
          <img
            className="familyJoin__codeResult__imageBox__image"
            src=""
            alt=""
          />
        </div>
        <div className="familyJoin__codeResult__nameBox">
          <span className="familyJoin__codeResult__nameBox__name">예삐네 가족</span>
        </div>
        <div className="familyJoin__codeResult__joinFamilyButtonBox">
          <Link
            className="familyJoin__codeResult__joinFamilyButtonBox__joinFamilyButton"
            to="/signup/member"
            state={{
              action: 'set-name',
            }}
          >
            <span className="familyJoin__codeResult__joinFamilyButtonBox__joinFamilyButton__span">
              입장하기
            </span>
          </Link>
        </div>
        <div className="familyJoin__codeResult__backButtonBox">
          <button
            className="familyJoin__codeResult__backButtonBox__backButton"
            onClick={handleExit}
          >
            <span className="familyJoin__codeResult__backButtonBox__backButton__span">
              우리 가족이 아니에요
            </span>
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default FamilyJoin;