import React, { useState } from "react";
import "./index.scss";

interface Props {
  text: string;
}

const textLengthLimit = 100;

const LongText = ({ text }: Props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      {text?.length > textLengthLimit ? (
        <span
          onClick={toggleReadMore}
          className="read-or-hide"
          style={{ color: "green" }}
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      ) : (
        <></>
      )}
    </p>
  );
};

export default LongText;
