import React from 'react';
import * as S from './DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';

function DeleteModal({
  folderName,
  onClose,
}: {
  folderName: string;
  onClose: (modalName: string) => void;
}) {
  return (
    <BaseModal onClose={onClose}>
      <S.Title>폴더 삭제</S.Title>
      <S.Name>{folderName}</S.Name>
      <S.ModalButton onClick={(e) => e.preventDefault()}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteModal;
