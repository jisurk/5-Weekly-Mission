import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import classNames from "classnames/bind";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { BASE_URL } from "@/api/config";
import styles from "@/styles/sign-in.module.scss";

export function SignIn() {
  const cx = classNames.bind(styles);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    const body = { email, password };

    try {
      const response = await axios.post(`${BASE_URL}/sign-in`, body);
      if (response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        router.push("/folder");
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          setEmailError("이메일을 확인해 주세요.");
          setPasswordError("비밀번호를 확인해 주세요.");
        }
      }
    }
  };

  return (
    <form className={cx("input")} onSubmit={handleSubmit}>
      <EmailInput value={email} onChange={setEmail} error={emailError} />
      <PasswordInput
        value={password}
        onChange={setPassword}
        error={passwordError}
      />
      <button type="submit" className={cx("sign-in__button", "button")}>
        로그인
      </button>
    </form>
  );
}
