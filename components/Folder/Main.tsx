import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import FolderList from "./FolderList";
import LinkList from "./CardList";

const MainContainer = styled.main`
  width: 100%;
  height: auto;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

interface MainProps {
  folderId?: string;
}

function Main({ folderId }: MainProps) {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(
    folderId ? parseInt(folderId, 10) : null
  );

  useEffect(() => {
    setSelectedFolderId(folderId ? parseInt(folderId, 10) : null);
  }, [folderId]);

  return (
    <MainContainer>
      <SearchBar />
      <FolderList
        selectedFolderId={selectedFolderId}
        onFolderClick={setSelectedFolderId}
      />
      <LinkList selectedFolderId={selectedFolderId} />
    </MainContainer>
  );
}

export default Main;
