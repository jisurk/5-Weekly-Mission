import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
  background-color: #111322;
  color: rgba(207, 207, 207, 1);
  width: 100%;
  height: 160px;
  padding: 32px 104px 64px;
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;
const FooterYear = styled.div`
  color: rgba(103, 103, 103, 1);
`;

const StyledLink = styled(Link)`
  color: rgba(103, 103, 103, 1);
`;

const FooterLink = styled.div`
  display: flex;
  gap: 30px;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 10px;
`;
const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
`;
function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterYear>©codeit - 2023</FooterYear>
        <FooterLink>
          <StyledLink href="privacy.html">Privacy Policy</StyledLink>
          <StyledLink href="faq.html">FAQ</StyledLink>
        </FooterLink>
        <FooterSocial>
          <Link href="https://www.facebook.com/">
            <SocialIcon src="/img/facebook.svg" alt="Facebook" />
          </Link>
          <Link href="https://twitter.com/">
            <SocialIcon src="/img/twitter.svg" alt="Twitter" />
          </Link>
          <Link href="https://youtube.com">
            <SocialIcon src="/img/youtube.svg" alt="Youtube" />
          </Link>
          <Link href="https://instagram.com">
            <SocialIcon src="/img/instagram.svg" alt="Instagram" />
          </Link>
        </FooterSocial>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
