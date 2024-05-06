import { useEffect, useRef, useState } from "react";
import { getFolderRequest } from "../api";
import * as S from "./FolderPage.styled";
import useAsync from "../hooks/useAsync";
import Search from "../components/Search/Search";
import AddLink from "../components/AddLink/AddLink";
import Folder from "../components/Folder/Folder";
import Card from "../components/Card/Card";
import { FolderLink } from "../api/types";

const FolderPage = () => {
  const { requestFunction: getUserFolderList } = useAsync(getFolderRequest);
  const [folderList, setFolderList] = useState([]);
  const [links, setLinks] = useState<FolderLink[]>([]);
  const [searchResult, setSearchResult] = useState("");

  const getFolderList = async () => {
    const { data } = await getUserFolderList();
    if (!data) return [];
    setFolderList(data);
  };

  useEffect(() => {
    getFolderList();
  }, []);

  return (
    <S.FolderPageLayout>
      <S.HeaderSection>
        <AddLink />
      </S.HeaderSection>
      <S.SearchSection>
        <Search links={links} setLinks={setLinks} searchResult={searchResult} setSearchResult={setSearchResult} />
      </S.SearchSection>
      <S.FolderSection>
        <Folder folderList={folderList} setLinks={setLinks} setSearchResult={setSearchResult} />
      </S.FolderSection>
      {links.length === 0 ? (
        <S.LinkSection $noneLinks>저장된 링크가 없습니다.</S.LinkSection>
      ) : (
        <S.LinkSection>
          {links.map((link: FolderLink) => (
            <Card key={link.id} link={link} folderList={folderList} />
          ))}
        </S.LinkSection>
      )}
    </S.FolderPageLayout>
  );
};

export default FolderPage;
