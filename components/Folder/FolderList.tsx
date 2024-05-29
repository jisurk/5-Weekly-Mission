import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { BASE_URL } from "@/api/config";
import Button from "./Button";

const ActiveFolderName = styled.p`
  text-align: left;
  width: 100%;
  position: relative;
  left: 50px;
  font-size: 24px;
  font-weight: 700;
`;

interface FolderListProps {
  selectedFolderId: number | null;
  onFolderClick: (folderId: number | null) => void;
}
interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

function FolderList({ selectedFolderId, onFolderClick }: FolderListProps) {
  const [folderData, setFolderData] = useState<FolderData[]>([]);

  useEffect(() => {
    const fetchFolderData = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        try {
          const response = await axios.get(`${BASE_URL}/folders`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setFolderData(response.data.data.folder);
        } catch (error) {
          console.error("folderList 에러 : ", error);
        }
      }
    };

    fetchFolderData();
  }, []);

  return (
    <div>
      {folderData.length > 0 ? (
        <>
          <Button
            folderData={folderData}
            selectedFolderId={selectedFolderId}
            onFolderClick={onFolderClick}
          />
          <ActiveFolderName>
            {selectedFolderId
              ? folderData.find((folder) => folder.id === selectedFolderId)
                  ?.name
              : "전체"}
          </ActiveFolderName>
        </>
      ) : (
        <div>저장된 폴더가 없습니다.</div>
      )}
    </div>
  );
}

export default FolderList;
