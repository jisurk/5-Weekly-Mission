import styled from "styled-components";

export const ContentListBox = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 20px;

  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 20px;
  }
`;
