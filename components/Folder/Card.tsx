import styled from "styled-components";
import { formatDate, generateTimeText } from "@/utils/util";
import Link from "next/link";

const StyledCard = styled.div`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;

  @media (max-width: 1124px) {
    max-width: 340px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardTextSection = styled.section`
  width: 100%;
  height: 136px;
  padding: 10px 20px;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "time"
    "description"
    "date";
`;

const CardDescription = styled.p`
  margin: 0;

  width: 100%;
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  grid-area: description;
`;

const TimeText = styled.p`
  margin: 0;
  grid-area: time;
`;

const DateText = styled.p`
  margin: 0;

  grid-area: date;
`;
export interface LinkData {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

function Card({ linkData }: { linkData: LinkData }) {
  return (
    <StyledCard>
      <StyledLink href={linkData.url} target="_blank">
        <CardImg
          src={linkData.image_source || "/img/thumbnail.svg"}
          alt={linkData.title}
        />
      </StyledLink>
      <CardTextSection>
        <TimeText>{generateTimeText(linkData.created_at)}</TimeText>
        <CardDescription>{linkData.description}</CardDescription>
        <DateText>{formatDate(linkData.created_at)}</DateText>
      </CardTextSection>
    </StyledCard>
  );
}

export default Card;
