import { useEffect, useState } from "react";
import axios from "axios";
import Card, { LinkData } from "./Card";
import { BASE_URL } from "@/api/config";

interface LinkListProps {
  selectedFolderId: number | null;
}

function LinkList({ selectedFolderId }: LinkListProps) {
  const [linkData, setLinkData] = useState<LinkData[]>([]);

  useEffect(() => {
    const fetchLinkData = async () => {
      try {
        let url = `${BASE_URL}/users/1/links`;
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
        linkData.map((data) => <Card key={data.id} linkData={data} />)
      ) : (
        <div>선택된 폴더에 저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}

export default LinkList;
