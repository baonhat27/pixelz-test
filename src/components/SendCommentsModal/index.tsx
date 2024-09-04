import React from "react";
import CardItem from "../CardItem";
import CustomModal from "../commons/CustomModal";
import Toggle from "../commons/Toggle";
import "./index.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isShowAllUsers: boolean;
  handleToggle: () => void;
}

const mockData = [
  {
    id: 0,
    imageInfo: {
      imageName: "Stussy-1.jpg",
      imageUrl:
        "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/1924762_blac_1_b06aecbf-64cd-48b3-b741-c735d419b75e_1728x_50977cf6b8a243a7a8790983d6acf35d.png",
    },
    comment:
      "This is a short comment This is a short comment This is a short comment This is a short comment This is a short comment",
    status: "Delivered",
  },
  {
    id: 1,
    imageInfo: {
      imageName: "Stussy-1.jpg",
      imageUrl:
        "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/1924762_blac_1_b06aecbf-64cd-48b3-b741-c735d419b75e_1728x_50977cf6b8a243a7a8790983d6acf35d.png",
    },
    comment: "This is a short comment",
    status: "Delivered",
  },
  {
    id: 2,
    imageInfo: {
      imageName: "Stussy-1.jpg",
      imageUrl:
        "https://cdn.authentic-shoes.com/wp-content/uploads/2023/04/1924762_blac_1_b06aecbf-64cd-48b3-b741-c735d419b75e_1728x_50977cf6b8a243a7a8790983d6acf35d.png",
    },
    comment: "This is a short comment",
    status: "Rejected",
  },
];

function SendCommentsModal(props: Props) {
  const { isOpen, onClose, isShowAllUsers, handleToggle } = props;

  const idList = mockData?.map((item) => item?.id);

  const handleEditItem = () => {
    console.log("Edit item");
  };

  const handleDeleteItem = () => {
    console.log("Delete item");
  };

  const handleSendItem = () => {
    console.log("Send item");
  };

  const handleSendAll = () => {
    console.log("Send all item", idList);
  };

  const handleDeleteAll = () => {
    console.log("Delete all item", idList);
  };

  const modalContent = (
    <div className="sendCommentModalContent">
      <div className="firstLine">
        <b>Saved Comments</b>
        <Toggle isToggled={isShowAllUsers} onToggle={handleToggle} />
      </div>
      <div className="secondLine">
        {mockData?.map((item: any) => (
          <CardItem
            imageName={item?.imageInfo?.imageName}
            image={item?.imageInfo?.imageUrl}
            info={item?.comment}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onSend={handleSendItem}
          />
        ))}
      </div>
    </div>
  );

  const modalFooter = (
    <div className="footerContainer">
      <button className="modalButton" onClick={handleDeleteAll}>
        Delete all
      </button>
      <div className="rightSide">
        <button className="modalButton" onClick={onClose}>
          Cancel
        </button>
        <button className="modalButton sendAllButton" onClick={handleSendAll}>
          Send all
        </button>
      </div>
    </div>
  );
  return (
    <div className="sendCommentsModal">
      <CustomModal
        title="Send Comments"
        isOpen={isOpen}
        onClose={onClose}
        children={modalContent}
        footer={modalFooter}
      />
    </div>
  );
}

export default SendCommentsModal;
