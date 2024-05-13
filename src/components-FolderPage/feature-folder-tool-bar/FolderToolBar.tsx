import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { FolderButton } from "@/components-FolderPage/ui-folder-button";
import { BUTTONS, ALL_LINKS_TEXT, MODALS_ID } from "./constant";
import { ALL_LINKS_ID } from "@/components-SharedPage/data-access-link/constant";
import { AddFolderButton } from "@/components-FolderPage/ui-add-folder-button/AddFolderButton";
import { useState } from "react";
import { IconAndTextButton } from "@/common/ui-icon-and-text-button";
import { InputModal } from "@/common/ui-input-modal/InputModal";
import { DeleteModal } from "@/common/ui-delete-modal";
import { ShareModal } from "@/components-FolderPage/ui-share-modal";

const cx = classNames.bind(styles);

export const FolderToolBar = ({
  folders,
  selectedFolderId,
  setSelectedFolderId,
  setKeyword,
}) => {
  const [currentModal, setCurrentModal] = useState(null);
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name;

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "escape") {
      closeModal();
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => {
            setSelectedFolderId(ALL_LINKS_ID);
            setKeyword("");
          }}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => {
              setSelectedFolderId(id);
              setKeyword("");
            }}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>

      <div className={cx("add-button")}>
        <AddFolderButton
          onClick={() => {
            setCurrentModal(MODALS_ID.addFolder);
          }}
        />
        {/* !!! 이런 식으로 팝업 시킬 모달창을 제어할 수 있다 */}
        <InputModal
          isOpen={currentModal === MODALS_ID.addFolder}
          onCloseClick={closeModal}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onKeyDown={handleKeyDown}
        />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      <div className={cx("buttons")}>
        {BUTTONS.map(({ text, iconSource, modalId }) => (
          <IconAndTextButton
            text={text}
            iconSource={iconSource}
            onClick={() => setCurrentModal(modalId)}
          />
        ))}
        <ShareModal
          isOpen={currentModal === MODALS_ID.share}
          onCloseClick={closeModal}
          folderName={folderName}
          title="폴더 공유"
          onKeyDown={handleKeyDown}
        />
        <InputModal
          isOpen={currentModal === MODALS_ID.rename}
          onCloseClick={closeModal}
          title="폴더 이름 변경"
          placeholder="유용한 팁"
          buttonText="변경하기"
          onKeyDown={handleKeyDown}
        />
        <DeleteModal
          isOpen={currentModal === MODALS_ID.delete}
          onCloseClick={closeModal}
          title="폴더 삭제"
          folderName={folderName}
          buttonText="삭제하기"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};
