import { useEffect, useState } from "react";
import axios from "axios";
import Card, { LinkData } from "./Card";
import { BASE_URL } from "@/api/config";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 25px;
  margin: 0 auto;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface CardListProps {
  selectedFolderId: number | null;
}

function CardList({ selectedFolderId }: CardListProps) {
  const [linkData, setLinkData] = useState<LinkData[]>([]);

  useEffect(() => {
    const fetchLinkData = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        try {
          let url = `${BASE_URL}/links`;
          if (selectedFolderId !== null) {
            url += `?folderId=${selectedFolderId}`;
            console.log("Id :", selectedFolderId);
          }
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (selectedFolderId === null) {
            setLinkData(response.data.data.folder);
          } else {
            setLinkData(response.data.data);
          }
          console.log("response : ", response.data.data);
        } catch (error) {
          console.error("에러 메세지 : ", error);
        }
      }
    };

    fetchLinkData();
  }, [selectedFolderId]);

  return (
    <StyledCardContainer>
      {linkData.length > 0 ? (
        linkData.map((data) => <Card key={data.id} linkData={data} />)
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
    </StyledCardContainer>
  );
}

export default CardList;
