import React from "react";
import styled from "styled-components";
import * as Auth from "../components/auth";
import { ButtonLabel } from "../components/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContent = styled(Auth.Content)`
  height: 491px;
  @media (max-width: 1199px) {
    top: 200px;
  }
  @media (max-width: 767px) {
    top: 120px;
    width: 325px;
  }
`;

const LoginForm = styled(Auth.Form)`
  height: 393px;
`;

const LoginInputFrame = styled(Auth.InputFrame)`
  height: 225px;
`;

const ToSignup = styled(Auth.To)``;

const LoginPage = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value || "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value || "");
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("이메일을 입력해 주세요.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("비밀번호를 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  const cancelEmailError = () => {
    if (!email) {
      setEmailError("");
    }
  };

  const cancelPasswordError = () => {
    if (!email) {
      setPasswordError("");
    }
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    validateEmail(); // 이메일 유효성 검사
    validatePassword(); // 비밀번호 유효성 검사

    // 이메일과 비밀번호가 모두 유효한 경우
    if (email === "test@codeit.com" && password === "codeit101") {
      navigate("/folder"); // 페이지 리디렉션
    } else if (email && password && /\S+@\S+\.\S+/.test(email)) {
      // 이메일 또는 비밀번호가 유효하지 않은 경우, 에러 메시지 설정
      if (email !== "test@codeit.com") setEmailError("이메일을 확인해 주세요.");
      if (password !== "codeit101")
        setPasswordError("비밀번호를 확인해 주세요.");
    }
  };

  return (
    <Auth.Template>
      <LoginContent>
        <LoginForm id="loginForm" onSubmit={handleLogin}>
          <Auth.LinkArea>
            <ToSignup>
              <div>회원이 아니신가요?</div>
              <a href="/signup"> 회원 가입하기 </a>
            </ToSignup>
          </Auth.LinkArea>

          <LoginInputFrame>
            <Auth.Input
              type={"email"}
              label={"이메일"}
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              onFocus={cancelEmailError}
              errorMessage={emailError}
            ></Auth.Input>

            <Auth.Input
              type={passwordShown ? "text" : "password"}
              label={"비밀번호"}
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              onFocus={cancelPasswordError}
              errorMessage={passwordError}
            >
              <i
                onClick={togglePasswordVisibility}
                className={`fa fa-${passwordShown ? "eye-slash" : "eye"} fa-lg`}
              ></i>
            </Auth.Input>
          </LoginInputFrame>

          <Auth.SubmitButton>
            <ButtonLabel>로그인</ButtonLabel>
          </Auth.SubmitButton>
        </LoginForm>

        <Auth.Social>소셜 로그인</Auth.Social>
      </LoginContent>
    </Auth.Template>
  );
};

export default LoginPage;
