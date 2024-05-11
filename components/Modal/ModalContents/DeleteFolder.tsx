import Button from "@/components/Button/Button";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { deleteFolder, getFolder } from "@/redux/actions/folder";
import { closeModal } from "@/redux/reducers/modal";
import { openToast } from "@/redux/reducers/toast";

const DeleteFolder: React.FC = () => {
  const { accessToken, userInfo } = useAppSelector((state) => state.auth);
  const { selectedFolder, selectedFolderId } = useAppSelector((state) => state.folder);
  const { text, variant } = useAppSelector((state) => state.modal.contents);
  const dispatch = useAppDispatch();

  const onClick = async () => {
    const res = await dispatch(deleteFolder({ accessToken: accessToken, folderId: selectedFolderId }));
    if (res.meta.requestStatus === "fulfilled") {
      dispatch(closeModal());
      dispatch(openToast("deleteFolder"));
      dispatch(getFolder(userInfo.id));
    }
  };

  return (
    <>
      <h4>{selectedFolder}</h4>
      <Button variant={variant} text={text} width={"100%"} onClick={onClick} />
    </>
  );
};

export default DeleteFolder;
