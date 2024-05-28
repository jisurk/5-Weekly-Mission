import styled from "styled-components";
import Card from "@/components/Shared/Card";
import SearchBar from "@/components/SearchBar";

const MainContainer = styled.main`
  width: 100%;
  height: auto;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;
interface MainProps {
  folderId: string;
}

function Main({ folderId }: MainProps) {
  return (
    <>
      <MainContainer>
        <SearchBar />
        <Card folderId={folderId} userId={1} />
      </MainContainer>
    </>
  );
}

export default Main;
