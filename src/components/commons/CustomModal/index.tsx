import React, { ReactNode } from "react";
import "./index.scss"; // Import SCSS for modal styles

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
  footer?: ReactNode;
}

const CustomModal = ({ isOpen, onClose, children, title, footer }: Props) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: any) => {
    if (e?.target === e?.currentTarget) onClose();
  };

  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modalContent">
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          <button className="closeButton" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modalBody">{children}</div>
        {footer && <div className="modalFooter">{footer}</div>}
      </div>
    </div>
  );
};

export default CustomModal;
