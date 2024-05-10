import { createContext } from "react";

interface ModalContextValue {
  openModal: () => void;
  setModalType: (type: string) => void;
  setCardUrl: (url: string) => void;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export default ModalContext;
