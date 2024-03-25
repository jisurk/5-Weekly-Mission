import {
  reset,
  inputEmail,
  inputPassword,
  inputPasswordConfirm,
  emailErrorMessage,
  pwErrorMessage,
  pwConfirmErrorMessage,
  passwordPattern,
  emailPattern,
} from "./commons/reset.js";
import { checkEmailRequest } from "./api/api.js";

// 이메일
export function textCheck() {
  const email = inputEmail.value;
  const emailLength = email.length > 0;
  const isEmailValid = emailPattern.test(email);
  reset();

  checkEmailRequest(email);

  if (!isEmailValid) {
    inputEmail.classList.remove("sign-focus");
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = "올바른 이메일 주소가 아닙니다.";
  }

  if (!emailLength) {
    inputEmail.classList.add("error-border");
    emailErrorMessage.innerHTML = "이메일을 입력해 주세요.";
  }
}

// 비밀번호
export function textCheckPw() {
  const password = inputPassword.value;
  const isPasswordValid = passwordPattern.test(password);
  const passwordLength = password.length === 0;
  inputPassword.classList.remove("error-border");
  pwErrorMessage.innerHTML = "";

  if (!isPasswordValid) {
    inputPassword.classList.add("error-border");
    pwErrorMessage.innerHTML =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  }

  if (passwordLength) {
    inputPassword.classList.add("error-border");
    pwErrorMessage.innerHTML = "비밀번호를 입력해 주세요.";
  }
}

// 비밀번호 확인
export function textCheckPwConfirm() {
  const passwordConfirm = inputPasswordConfirm.value;
  const password = inputPassword.value;
  inputPasswordConfirm.classList.remove("error-border");
  pwConfirmErrorMessage.innerHTML = "";

  if (passwordConfirm !== password) {
    inputPasswordConfirm.classList.add("error-border");
    pwConfirmErrorMessage.innerHTML = "비밀번호가 일치하지 않아요.";
  }
}
