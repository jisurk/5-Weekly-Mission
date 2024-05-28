import styled from "styled-components";
import Nav from "../Header-Nav";
import Content from "./Header-Content";

const StyledHeaderContainer = styled.div`
  background-color: #f0f6ff;
  width: 100%;
  height: 336px;
  position: relative;
`;

interface HeaderProps {
  folderId: string;
}

function Header({ folderId }: HeaderProps) {
  return (
    <StyledHeaderContainer>
      <Nav position="absolute" />
      <Content folderId={folderId} />
    </StyledHeaderContainer>
  );
}

export default Header;
