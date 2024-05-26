import Header from "@/components/Folder/Header";
import Main from "@/components/Folder/Main";
import Footer from "@/components/Footer";
import styled from "styled-components";
const StyledFolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
function Folder() {
  return (
    <StyledFolder>
      <Header />
      <Main />
      <Footer />
    </StyledFolder>
  );
}

export default Folder;
