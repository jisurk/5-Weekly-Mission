import FolderHeader from "@/components/Folder/FolderHeader";
import Main from "@/components/Folder/Main";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
      <FolderHeader />
      <Main folderId={folderId as string} />
      <Footer />
    </StyledFolder>
  );
}
