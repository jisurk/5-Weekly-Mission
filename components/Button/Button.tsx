import * as S from "./Button.styled";
import React from "react";
/**
 *
 * @param {string} variant 버튼의 형식 addFolder,deleteFolder,deleteLink,default,folderButton
 * @param {boolean} isActive 버튼의 색상 변경을 위한 프롭스
 * @param {string} text 버튼 내부에 들어갈 텍스트
 * @param {string} className 사용할 곳에서 스타일링을 위한 클래스네임
 * @param {string} type type='submit' 이 필요할경우
 * @param {function} onClick 버튼 클릭시 사용할 함수
 * @returns {Element}
 */

interface ButtonProps {
  variant: string;
  width?: boolean;
  text?: string;
  selected?: string;
  className?: string;
  type?: "submit" | "button";
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  width = false,
  text,
  selected,
  className,
  type = "button",
  onClick,
}) => {
  return (
    <S.Button
      $variant={variant}
      $width={width}
      $isActive={selected === text}
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </S.Button>
  );
};

export default Button;
