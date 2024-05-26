import Link from "next/link";
import styled from "styled-components";
import { useFetch } from "@/utils/useFetch";
import { BASE_URL } from "@/api/config";

interface StyledNavBarProps {
  position?: string;
}

const StyledNavBar = styled.div<StyledNavBarProps>`
  background-color: #f0f6ff;
  display: flex;
  width: 100%;
  height: 92px;
  align-items: center;
  justify-content: space-between;
  padding: 32px 200px;
  gap: 8px;
  position: ${(props) => props.position || "static"};
  z-index: 1;
  @media (max-width: 1124px) {
    width: 100%;
    padding: 32px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 63px;
    padding: 18px 32px;
  }
`;

const StyledHeaderLogo = styled.img`
  width: 132px;
  height: 24px;
`;

const StyledUserProfile = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const StyledUserProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const url = `${BASE_URL}/sample`;

interface UserProfile {
  profileImageSource: string;
  email: string;
}

interface HeaderNavProps {
  position?: string;
}

function HeaderNav({ position = "static" }: HeaderNavProps) {
  const Userprofile = useFetch<UserProfile>(`${url}/user`);

  return (
    <>
      <StyledNavBar position={position}>
        <Link href="/">
          <StyledHeaderLogo src="/img/logo.svg" alt="Linkbrary 로고" />
        </Link>
        {Userprofile ? (
          <StyledUserProfile>
            <StyledUserProfileImg
              src={Userprofile.profileImageSource}
              alt="유저 프로필사진"
            />
            <p>{Userprofile.email}</p>
          </StyledUserProfile>
        ) : (
          <button>로그인</button>
        )}
      </StyledNavBar>
    </>
  );
}

export default HeaderNav;
