import React from "react";

interface PropsType {
  width: number;
  text: string;
}

const GradientSkyblueBtn: React.FC<PropsType> = ({ width, text }) => {
  const widthPx: Record<number, string> = {
    128: "w-[128px]",
    350: "w-[350px]",
  };

  return (
    <button
      className={`${widthPx[width]} rounded-[8px] bg-gradient-to-r from-purple-600 to-sky-400 px-[20px] py-[16px] text-[18px] font-[600] text-neutral-100`}
    >
      {text}
    </button>
  );
};

export default GradientSkyblueBtn;
