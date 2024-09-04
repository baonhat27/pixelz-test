import React from "react";
import { ReactComponent as PencilIcon } from "../../assets/Pencil.svg";
import { ReactComponent as TrashIcon } from "../../assets/Trash.svg";
import { ReactComponent as SendIcon } from "../../assets/Send.svg";
import "./index.scss";
import LongText from "../commons/LongText";

interface Props {
  image: string;
  imageName: string;
  info: string;
  onEdit: () => void;
  onDelete: () => void;
  onSend: () => void;
}

const CardItem = ({
  image,
  info,
  onEdit,
  onDelete,
  onSend,
  imageName,
}: Props) => {
  return (
    <div className="card-item">
      <input type="checkbox" className="card-checkbox" />

      <img src={image} alt="Card" className="card-image" />

      <div className="info-container">
        <div className="image-container">
          <b>{imageName}</b>

          <div className="card-info">
            <div className="general-text">General</div>
            <div className="comment-text">
              <LongText text={info} />
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="card-button" onClick={onEdit}>
            <PencilIcon />
          </button>
          <button className="card-button" onClick={onDelete}>
            <TrashIcon />
          </button>
          <button className="card-button" onClick={onSend}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
