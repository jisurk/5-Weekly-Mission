import Header from "@/components/Shared/SharedHeader";
import Main from "@/components/Shared/Main";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function SharedPage() {
  const router = useRouter();
  const { folderId } = router.query;

  return (
    <>
      <Header folderId={folderId as string} />
      <Main folderId={folderId as string} />
      <Footer />
    </>
  );
}
