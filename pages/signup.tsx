import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignUp } from "@/components/SignUpForm";
import styles from "@/styles/sign-up.module.scss";
import classNames from "classnames/bind";

export default function SignUpPage() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("body")}>
      <section className={cx("section")}>
        <div className={cx("content")}>
          <div className={cx("title")}>
            <Link href="/">
              <Image
                className={cx("logo-img")}
                src="/img/logo.svg"
                alt=""
                width={200}
                height={40}
                priority
              />
            </Link>
            <div className={cx("question")}>
              이미 회원이신가요?
              <Link className={cx("signinLink")} href="/signin">
                로그인 하기
              </Link>
            </div>
          </div>
          <SignUp />
        </div>
        <div className={cx("social")}>
          <div className={cx("social-text")}>다른 방식으로 가입하기</div>
          <div className={cx("social-link")}>
            <Link href="https://www.google.com/">
              <Image
                src="/img/google.svg"
                alt="Google icon"
                width={42}
                height={42}
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <Image
                src="/img/kakao.svg"
                alt="Kakao icon"
                width={42}
                height={42}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
