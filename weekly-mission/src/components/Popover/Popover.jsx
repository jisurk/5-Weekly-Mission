import * as S from "./Popover.styled";
import { memo } from "react";
import { useModal } from "../Context/ModalContext";

const Popover = () => {
  const { modalState, openModal, closeModal } = useModal();

  const handleModalToggle = (modalType) => {
    if (modalState[modalType]) {
      closeModal(modalType);
    } else {
      openModal(modalType);
    }
  };

  return (
    <S.PopoverContainer>
      <S.PopoverButton
        onClick={() => {
          handleModalToggle("deleteLink");
        }}
      >
        삭제하기
      </S.PopoverButton>

      <S.PopoverButton
        onClick={() => {
          handleModalToggle("addLink");
        }}
      >
        폴더에 추가
      </S.PopoverButton>
    </S.PopoverContainer>
  );
};

export default memo(Popover);
