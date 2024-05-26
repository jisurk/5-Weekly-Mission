import { useEffect, useState } from "react";
import axios from "axios";
import FolderCards from "./Card";

const BASE = "https://bootcamp-api.codeit.kr/api/users/1";

function LinkList({ selectedFolderId }: number) {
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    const fetchLinkData = async () => {
      try {
        let url = `${BASE}/links`;
        if (selectedFolderId !== null) {
          url += `?folderId=${selectedFolderId}`;
        }
        const response = await axios.get(url);
        setLinkData(response.data.data);
      } catch (error) {
        console.error("에러 메세지 : ", error);
      }
    };

    fetchLinkData();
  }, [selectedFolderId]);

  return (
    <div>
      {linkData.length > 0 ? (
        <FolderCards linkData={linkData} />
      ) : (
        <div>선택된 폴더에 저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}

export default LinkList;
