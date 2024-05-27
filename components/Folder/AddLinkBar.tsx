import Image from "next/image";
import styled from "styled-components";

const AddLinkBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 100%;
`;
const AddLinkInputBox = styled.div`
  background-color: #fff;
  position: relative;
  height: 70px;
  width: 800px;
  border: 1px solid #6d6afe;
  border-radius: 15px;
  padding: 16px 20px;
`;
const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0;

  &::placeholder {
    text-indent: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #9fa6b2;
  }
`;
const LinkIcon = styled(Image)`
  position: absolute;

  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
const AddButton = styled.button`
  height: 38px;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border: none;
  border-radius: 8px;
  color: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  right: 20px;
  white-space: nowrap;
  position: absolute;
`;

function AddLinkBar() {
  return (
    <AddLinkBarContainer>
      <AddLinkInputBox>
        <InputField type="search" placeholder="링크를 추가해 보세요." />
        <LinkIcon
          width={20}
          height={20}
          src="/icon/link.svg"
          alt="링크모양 아이콘"
        />
        <AddButton>추가하기</AddButton>
      </AddLinkInputBox>
    </AddLinkBarContainer>
  );
}

export default AddLinkBar;
