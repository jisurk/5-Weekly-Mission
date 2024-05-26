import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate, generateTimeText } from "@/utils/util";

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
  padding: 15px 20px;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;
`;

const CardDescription = styled.p`
  width: 100%;
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface LinkData {
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
      <StyledLink to={linkData.url} target="_blank">
        <CardImg
          src={linkData.image_source || "/img/thumbnail.svg"}
          alt={linkData.title}
        />
      </StyledLink>
      <CardTextSection>
        <p>{generateTimeText(linkData.created_at)}</p>
        <CardDescription>{linkData.description}</CardDescription>
        <p>{formatDate(linkData.created_at)}</p>
      </CardTextSection>
    </StyledCard>
  );
}

export default Card;
