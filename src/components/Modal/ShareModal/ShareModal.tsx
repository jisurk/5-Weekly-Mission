import React from 'react';
import * as S from './ShareModal.styled';
import KakaoIcon from '../../../assets/Kakao.svg';
import FaceBookIcon from '../../../assets/Facebook.svg';
import LinkIcon from '../../../assets/link.svg';
import BaseModal from '../BaseModal/BaseModal';

function ShareModal({
  folderName,
  onClose,
}: {
  folderName: string;
  onClose: (modalName: string) => void;
}) {
  return (
    <BaseModal onClose={onClose}>
      <S.Header>
        <p>폴더 공유</p>
        <span>{folderName}</span>
      </S.Header>
      <S.ButtonContainer>
        <S.ShareButtonBody $color="#FEE500">
          <span>
            <img src={KakaoIcon} alt="카카오톡 아이콘" />
          </span>
          <p>카카오톡</p>
        </S.ShareButtonBody>
        <S.ShareButtonBody $color="#1877F2">
          <span>
            <img src={FaceBookIcon} alt="페이스북 아이콘" />
          </span>
          <p>페이스북</p>
        </S.ShareButtonBody>
        <S.ShareButtonBody $color="rgba(157, 157, 157, 0.04)">
          <span>
            <img src={LinkIcon} alt="링크 아이콘" />
          </span>
          <p>링크 복사</p>
        </S.ShareButtonBody>
      </S.ButtonContainer>
    </BaseModal>
  );
}

export default ShareModal;
