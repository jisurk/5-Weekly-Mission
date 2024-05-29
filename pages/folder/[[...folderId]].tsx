import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "@/components/Folder/Header";
import Main from "@/components/Folder/Main";
import Footer from "@/components/Footer";
import styled from "styled-components";

const StyledFolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function FolderPage() {
  const router = useRouter();
  const { folderId } = router.query;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/signin");
    }
  }, []);

  return (
    <StyledFolder>
      <Header />
      <Main folderId={Array.isArray(folderId) ? folderId[0] : folderId} />
      <Footer />
    </StyledFolder>
  );
}
