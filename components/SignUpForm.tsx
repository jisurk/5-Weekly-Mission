import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import classNames from "classnames/bind";

import EmailInput from "./EmailInput";
import SignUpPassword from "./SignUpPassword";
import { isEmailValid, isPasswordValid } from "@/utils/util";
import { BASE_URL } from "@/api/config";
import styles from "@/styles/sign-up.module.scss";

export function SignUp() {
  const cx = classNames.bind(styles);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const validateEmail = isEmailValid(email);
    const validatePassword = isPasswordValid(password);
    const passwordMatch = password === confirmPassword;

    if (validateEmail && validatePassword && passwordMatch) {
      const checkEmailUrl = `${BASE_URL}/api/check-email`;
      const checkEmailData = { email };

      try {
        const checkEmailResponse = await axios.post(
          checkEmailUrl,
          checkEmailData
        );
        if (checkEmailResponse.status === 200) {
          setEmailError("");
          const signUpUrl = `${BASE_URL}/api/sign-up`;
          const signUpData = { email, password };
          try {
            const signUpResponse = await axios.post(signUpUrl, signUpData);
            if (signUpResponse.status === 200) {
              const { accessToken } = signUpResponse.data;
              localStorage.setItem("accessToken", accessToken);
              router.push("/folder");
            }
          } catch (error) {
            console.log("Error:", error);
          }
        }
      } catch (error: any) {
        if (error.response && error.response.status === 409) {
          setEmailError("이미 사용 중인 이메일입니다.");
        } else {
          console.log("Error:", error);
        }
      }
    }
  };

  return (
    <form className={cx("sign-up__form")} onSubmit={signUp}>
      <EmailInput value={email} onChange={setEmail} error={emailError} />
      <SignUpPassword
        password={password}
        confirmPassword={confirmPassword}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
      />
      <button type="submit" className={cx("sign-up__button")}>
        회원가입
      </button>
    </form>
  );
}
