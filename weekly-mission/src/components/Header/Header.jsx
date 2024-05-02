import useFolderList from "../../hooks/useFolderList";
import AddFolderLink from "../AddFolderLinkBar/AddFolderLink";
import * as S from "./Header.styled";

const Header = ({ isFolderPage }) => {
  const { data: folderData, isLoading } = useFolderList();

  return (
    <S.HeaderContainer>
      {isFolderPage ? (
        <AddFolderLink />
      ) : (
        <S.FolderInfoContainer>
          {folderData && (
            <S.FolderInfo>
              <S.ProfileImage
                src={folderData.folder.owner.profileImageSource}
                alt="폴더 소유자 프로필"
              />
              <S.OwnerName>{folderData.folder.owner.name}</S.OwnerName>
              <S.FolderName>{folderData.folder.name}</S.FolderName>
            </S.FolderInfo>
          )}
        </S.FolderInfoContainer>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
