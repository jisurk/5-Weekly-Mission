import styled from "styled-components";
import Card, { LinkData } from "./Card";

const StyledCardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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
  linkData: LinkData[];
}

function CardList({ linkData }: CardListProps) {
  return (
    <StyledCardContainer>
      {linkData.map((data) => (
        <Card key={data.id} linkData={data} />
      ))}
    </StyledCardContainer>
  );
}

export default CardList;
