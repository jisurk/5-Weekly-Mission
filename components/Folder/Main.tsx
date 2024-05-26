// FolderMain.js
import { useState } from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import FolderList from "./FolderList";
import LinkList from "./LinkList";

const MainContainer = styled.main`
  width: 100%;
  height: auto;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

function FolderMain() {
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handleFolderClick = (folderId) => {
    setSelectedFolderId(folderId);
  };

  return (
    <MainContainer>
      <SearchBar />
      <FolderList onFolderClick={handleFolderClick} />
      <LinkList selectedFolderId={selectedFolderId} />
    </MainContainer>
  );
}

export default FolderMain;
