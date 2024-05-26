import styled from "styled-components";
import { useFetch } from "@/utils/useFetch";
import { BASE_URL } from "@/api/config";

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

interface FolderOwner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderData {
  folder: {
    id: number;
    name: string;
    owner: FolderOwner;
  };
}

function HeaderContent() {
  const folderData = useFetch<FolderData>(`${BASE_URL}/sample/folder`);

  return (
    <StyledFolderInfoContent>
      {folderData && (
        <StyledFolderInfo>
          <StyledFolderImg
            src={folderData.folder.owner.profileImageSource}
            alt="프로필"
          />
          <StyledFolderOwnerName>
            @{folderData.folder.owner.name}
          </StyledFolderOwnerName>
          <StyledFolderName>{folderData.folder.name}</StyledFolderName>
        </StyledFolderInfo>
      )}
    </StyledFolderInfoContent>
  );
}

export default HeaderContent;
