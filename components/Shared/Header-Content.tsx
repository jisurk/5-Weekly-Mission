import styled from "styled-components";
import { useFetch } from "@/utils/useFetch";
import { BASE_URL } from "@/api/config";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledFolderInfoContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFolderInfo = styled.div`
  width: 188px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledFolderImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledFolderOwnerName = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const StyledFolderName = styled.p`
  width: auto;
  height: 48px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
`;

interface FolderData {
  id: number;
  name: string;
  user_id: number;
}

interface FolderOwner {
  id: number;
  name: string;
  image_source: string;
}

interface HeaderContentProps {
  folderId: string;
}

function HeaderContent({ folderId }: HeaderContentProps) {
  const [folderData, setFolderData] = useState<FolderData | null>(null);
  const [folderOwner, setFolderOwner] = useState<FolderOwner | null>(null);

  useEffect(() => {
    const fetchFolderData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/folders/${folderId}`);
        setFolderData(response.data.data);
      } catch (error) {
        console.error("폴더 정보 가져오기 에러:", error);
      }
    };

    const fetchFolderOwner = async () => {
      if (folderData) {
        try {
          const response = await axios.get(
            `${BASE_URL}/users/${folderData.user_id}`
          );
          setFolderOwner(response.data.data);
        } catch (error) {
          console.error("폴더 소유자 정보 가져오기 에러:", error);
        }
      }
    };

    fetchFolderData();
    if (folderData) {
      fetchFolderOwner();
    }
  }, [folderId, folderData]);

  return (
    <StyledFolderInfoContent>
      {folderData && folderOwner && (
        <StyledFolderInfo>
          <StyledFolderImg src={folderOwner.image_source} alt="프로필" />
          <StyledFolderName>{folderData.name}</StyledFolderName>
        </StyledFolderInfo>
      )}
    </StyledFolderInfoContent>
  );
}

export default HeaderContent;
