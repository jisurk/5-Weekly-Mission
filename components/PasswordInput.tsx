import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "@/styles/sign-in.module.scss";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  id?: string;
}

export default function PasswordInput({
  value,
  onChange,
  onBlur,
  error,
  id,
}: PasswordInputProps) {
  const cx = classNames.bind(styles);
  const [isFocused, setIsFocused] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
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
        id={id || "password"}
        placeholder="비밀번호를 입력해 주세요."
        className={cx("user-input", { "error-input": isError })}
        type="password"
        name="password"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <div
        id="password-errorText"
        className={cx("error-text", { error: !isError })}
      >
        {error || errorText}
      </div>
    </div>
  );
}
