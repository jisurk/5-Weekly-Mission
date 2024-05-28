import styled from "styled-components";

import Nav from "../Header-Nav";
import AddLinkBar from "./AddLinkBar";

const StyledHeader = styled.div`
  background-color: #f0f6ff;
  width: 100%;
  height: 300px;
`;

function FolderHeader() {
  return (
    <StyledHeader>
      <Nav />
      <AddLinkBar />
    </StyledHeader>
  );
}

export default FolderHeader;
