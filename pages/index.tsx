import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "@/styles/index.module.scss";
import Footer from "@/components/Footer";

export default function Home() {
  const cx = classNames.bind(styles);
  return (
    <>
      <nav className={cx("nav")}>
        <div className={cx("nav__bar")}>
          <Link href="/">
            <Image
              width={134}
              height={24}
              src="/img/logo.svg"
              alt="logo"
              priority
            />
          </Link>
          <Link className={cx("login__link")} href="/signin">
            로그인
          </Link>
        </div>
      </nav>
      <main>
        <section className={cx("main")}>
          <h1 className={cx("main__description")}>
            <span className={cx("main__description--highlight")}>
              세상의 모든 정보
            </span>
            <span>
              를<br />
              쉽게 저장하고 <br className={cx("media__br")} />
              관리해 보세요
            </span>
          </h1>
          <div className={cx("sign-up")}>
            <Link className={cx("sign-up__link")} href="/signup">
              링크 추가하기
            </Link>
          </div>
          <div className={cx("main__img-section")}>
            <Image
              width={1118}
              height={658}
              className={cx("main__img")}
              src="/img/main.svg"
              alt="main"
            />
          </div>
        </section>
        <section className={cx("section")}>
          <div className={cx("section__content")}>
            <div className={cx("description-section")}>
              <h2 className={cx("section-title")}>
                <span className={cx("save--gradient")}>원하는 링크</span>를
                <br className={cx("none")} />
                저장하세요
              </h2>
              <div className={cx("description")}>
                나중에 읽고 싶은 글. 다시 보고싶은 영상,
                <br className={cx("media__br")} />
                사고싶은 옷, 기억하고 싶은 모든 것을
                <br />한 공간에 저장하세요.
              </div>
            </div>
            <Image
              width={326}
              height={266}
              className={cx("section-img")}
              src="/img/save.svg"
              alt="save"
            />
          </div>
        </section>
        <section className={cx("section")}>
          <div className={cx("section__content", "reverse")}>
            <Image
              width={326}
              height={266}
              className={cx("section-img")}
              src="/img/manage.svg"
              alt="manage"
            />
            <div className={cx("description-section")}>
              <h2 className={cx("section-title")}>
                링크를 폴더로
                <br />
                <span className={cx("manage--gradient")}>관리</span>하세요.
              </h2>
              <div className={cx("description")}>
                나만의 폴더를 무제한으로 만들고
                <br />
                다양하게 활용할 수 있습니다.
              </div>
            </div>
          </div>
        </section>
        <section className={cx("section")}>
          <div className={cx("section__content")}>
            <div className={cx("description-section")}>
              <h2 className={cx("section-title")}>
                저장한 링크를
                <br />
                <span className={cx("share--gradient")}>공유</span>해 보세요.
              </h2>
              <div className={cx("description")}>
                여러 링크를 폴더에 담고 공유할 수 있습니다.
                <br />
                가족, 친구, 동료들에게 쉽고 빠르게 링크를
                <br />
                공유해보세요.
              </div>
            </div>
            <Image
              width={326}
              height={266}
              className={cx("section-img")}
              src="/img/share.svg"
              alt="share"
            />
          </div>
        </section>
        <section className={cx("section")}>
          <div className={cx("section__content", "reverse")}>
            <Image
              width={326}
              height={266}
              className={cx("section-img")}
              src="/img/search.svg"
              alt="search"
            />
            <div className={cx("description-section")}>
              <h2 className={cx("section-title")}>
                저장한 링크를
                <br />
                <span className={cx("search--gradient")}>검색</span>해 보세요.
              </h2>
              <div className={cx("description")}>
                중요한 정보들을 검색으로 쉽게 찾아보세요.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
