import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { BASE_URL } from "@/api/config";
import Button from "./Button";

const BASE = `${BASE_URL}/users/1`;

const ActiveFolderName = styled.p`
  text-align: left;
  width: 100%;
  position: relative;
  left: 50px;
  font-size: 24px;
  font-weight: 700;
`;

interface FolderListProps {
  onFolderClick: (buttonId: number | null) => void;
}

function FolderList({ onFolderClick }: FolderListProps) {
  const [folderData, setFolderData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE}/folders`)
      .then((response) => {
        setFolderData(response.data.data);
      })
      .catch((error) => {
        console.error("에러 메세지 : ", error);
      });
  }, []);

  return (
    <div>
      {folderData.length > 0 ? (
        <>
          <Button folderData={folderData} onFolderClick={onFolderClick} />
          <ActiveFolderName></ActiveFolderName>
        </>
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}

export default FolderList;
