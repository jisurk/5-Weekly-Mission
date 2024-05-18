import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "@/styles/signin.module.scss";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function PasswordInput({ value, onChange, error }: PasswordInputProps) {
  const cx = classNames.bind(styles);
  const [isFocused, setIsFocused] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      setErrorText("비밀번호를 입력해 주세요.");
    } else {
      setErrorText("");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const isError = !isFocused && (error || errorText);

  return (
    <div className={cx("input__section", "password-section")}>
      <label className={cx("text")}>
        비밀번호 <br />
      </label>
      <input
        id="password"
        placeholder="비밀번호를 입력해 주세요."
        className={cx("user-input", { "error-input": isError })}
        type="password"
        name="password"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <i className={cx("fa", "fa-eye", "fa-lg")}></i>
      <div
        id="password-errorText"
        className={cx("errortext", { error: !isError })}
      >
        {error || errorText}
      </div>
    </div>
  );
}
