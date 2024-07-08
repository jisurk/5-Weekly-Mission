import styled from "styled-components";
import Link from "next/link";

import { BASE_URL } from "@/api/config";
import { useFetch } from "@/utils/useFetch";
import { formatDate, generateTimeText } from "@/utils/util";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledCardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 340px);
  grid-template-rows: 334px;
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

const StyledCardSection = styled.section`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
`;

const StyledCardImg = styled.img`
  width: 340px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &:hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }
`;

const StyledCardTextSection = styled.section`
  width: 300px;
  height: 136px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledCardCreatedAt = styled.div`
  color: #666666;
  font-size: 13px;
  height: 17px;
`;

const StyledCardTextBody = styled.div`
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  height: 49px;
`;

const StyledCardDate = styled.div`
  font-size: 14px;
`;

interface LinkData {
  id: number;
  url: string;
  title: string;
  description: string;
  image_source: string;
  created_at: string;
}

interface CardProps {
  folderId: string;
  userId: number;
}

function Card({ folderId, userId }: CardProps) {
  const [linkData, setLinkData] = useState<LinkData[]>([]);

  useEffect(() => {
    const fetchLinkData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const response = await axios.get(
            `${BASE_URL}/users/${userId}/links?folderId=${folderId}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setLinkData(response.data.data);
        }
      } catch (error) {
        console.error("링크 데이터 가져오기 에러:", error);
      }
    };

    fetchLinkData();
  }, [folderId, userId]);

  return (
    <StyledCardContainer>
      {linkData.map((link) => (
        <StyledCardSection key={link.id}>
          <Link href={link.url} target="_blank">
            <StyledCardImg
              src={link.image_source || "/img/thumbnail.svg"}
              alt={link.image_source ? link.title : "thumbnail-img"}
            />
          </Link>
          <StyledCardTextSection>
            <div>
              <StyledCardCreatedAt>
                {generateTimeText(link.created_at)}
              </StyledCardCreatedAt>
            </div>
            <StyledCardTextBody>{link.description}</StyledCardTextBody>
            <StyledCardDate>{formatDate(link.created_at)}</StyledCardDate>
          </StyledCardTextSection>
        </StyledCardSection>
      ))}
    </StyledCardContainer>
  );
}

export default Card;
