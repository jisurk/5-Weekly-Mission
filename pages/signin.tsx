import React from "react";
import Image from "next/image";
import styles from "@/styles/sign-in.module.scss";
import classNames from "classnames/bind";
import { SignIn } from "@/components/SignInForm";
import Link from "next/link";

export default function Signin() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("body")}>
      <main className={cx("section")}>
        <div className={cx("content")}>
          <section className={cx("title")}>
            <Link href="index.html">
              <Image
                width={210}
                height={38}
                className={cx("logo-img")}
                src="/img/logo.svg"
                alt=""
                priority
              />
            </Link>
            <div className={cx("question")}>
              <div className={cx("question-text")}>회원이 아니신가요?</div>
              <Link className={cx("signupLink")} href="signup.html">
                회원 가입하기
              </Link>
            </div>
          </section>
          <SignIn />
          <div className={cx("social")}>
            <div className={cx("social-text")}>소셜 로그인</div>
            <div className={cx("social-link")}>
              <Link href="https://www.google.com/">
                <Image
                  width={42}
                  height={42}
                  src="/img/google.svg"
                  alt="Google icon"
                />
              </Link>
              <Link href="https://www.kakaocorp.com/page/">
                <Image
                  width={42}
                  height={42}
                  src="/img/kakao.svg"
                  alt="Kakao icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
