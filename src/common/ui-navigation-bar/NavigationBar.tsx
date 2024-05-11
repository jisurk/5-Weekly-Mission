import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/common/util";
import { Cta } from "@/common/ui-cta";
import { Profile } from "@/components-user/ui-profile";
import { LOGO_IMAGE, TEXT } from "./constant";

const cx = classNames.bind(styles);

interface Props {
  profile: { email: string; profileImageSource: string } | null;
  isSticky: boolean;
}

export const NavigationBar = ({ profile, isSticky }: Props) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <a href={ROUTE.랜딩}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta>
              <span className={cx("signin")}>{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
