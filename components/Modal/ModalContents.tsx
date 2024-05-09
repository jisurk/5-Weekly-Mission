import facebookIcon from "@/assets/icons/facebook_icon.svg";
import linkIcon from "@/assets/icons/link.svg";
import copyToClipboard from "@/utils/copyToClipboard";
import Toast from "../Toast/Toast";
import * as S from "./ModalContents.styled";
import { FolderList } from "@/services/types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import KakaoButton from "../KakaoButton/KakaoButton";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { postFolder } from "@/redux/actions/folder";

interface ShareProps {
  isToast: boolean;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  folderId: number;
}

interface DeleteProps {
  variant: string;
  text?: string;
}

interface LinkFolderProps {
  variant: string;
  text?: string;
  folderList?: FolderList[];
}

interface ChangeNameProps {
  variant: string;
  text?: string;
  currentFolder?: string;
}

interface AddFolderProps {
  variant: string;
  text?: string;
  closeModal: () => void;
}
interface AddLinkProps {
  variant: string;
  text?: string;
}

export const Share: React.FC<ShareProps> = ({ isToast, setToast, folderId }) => {
  return (
    <>
      <S.ShareContainer>
        <KakaoButton />
        <div>
          <Image src={facebookIcon} alt={facebookIcon} />
          <p>페이스북</p>
        </div>
        <div onClick={() => copyToClipboard(setToast, folderId)}>
          <Image src={linkIcon} alt={linkIcon} />
          <p>링크 복사</p>
        </div>
      </S.ShareContainer>
      {isToast && (
        <S.ToastContainer>
          <Toast setToast={setToast} />
        </S.ToastContainer>
      )}
    </>
  );
};

export const LinkFolder: React.FC<LinkFolderProps> = ({ folderList, variant, text }) => {
  return (
    <>
      <S.FolderList>
        {folderList?.map((folder) => (
          <S.FolderListItem key={folder.id}>
            <S.ItemName>{folder.name}</S.ItemName>
            <S.ItemLinkCount>{folder.link.count}개 링크</S.ItemLinkCount>
          </S.FolderListItem>
        ))}
      </S.FolderList>
      <Button variant={variant} text={text} width={"100%"} />
    </>
  );
};

export const Delete: React.FC<DeleteProps> = ({ variant, text }) => {
  return <Button variant={variant} text={text} width={"100%"} />;
};

export const ChangeName: React.FC<ChangeNameProps> = ({ variant, text, currentFolder }) => {
  return (
    <>
      <Input placeholder={currentFolder} />
      <Button variant={variant} text={text} width={"100%"} />
    </>
  );
};

export const AddFolder: React.FC<AddFolderProps> = ({ variant, text }) => {
  const [folderName, setFolderName] = useState("");
  const token = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (folderName) {
      dispatch(postFolder({ folderName, token }));
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input value={folderName} onChange={onChangeInputValue} placeholder={"생성할 폴더 이름"} />
        <Button variant={variant} text={text} type={"submit"} width={"100%"} />
      </form>
    </>
  );
};
