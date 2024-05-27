import { useState } from "react";
import styled from "styled-components";

interface FolderData {
  id: number;
  name: string;
}

interface StyledFolderButtonProps {
  active: boolean;
}

const StyledFolderButton = styled.button<StyledFolderButtonProps>`
  background-color: #ffffff;
  width: auto;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
  margin-right: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #6D6AFE;
    color: #ffffff;
  `}
`;

interface ButtonProps {
  folderData: FolderData[];
  onFolderClick: (buttonId: number | null) => void;
}
function Button({ folderData, onFolderClick }: ButtonProps) {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number | null) => {
    setActiveButton(buttonId);
    onFolderClick(buttonId);
  };

  return (
    <>
      <StyledFolderButton
        onClick={() => handleButtonClick(null)}
        active={activeButton === null}
      >
        전체
      </StyledFolderButton>
      {folderData.map((data) => (
        <StyledFolderButton
          key={data.id}
          onClick={() => handleButtonClick(data.id)}
          active={activeButton === data.id}
        >
          {data.name}
        </StyledFolderButton>
      ))}
    </>
  );
}
export default Button;
