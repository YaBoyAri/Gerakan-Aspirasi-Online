import React from "react";
import icon from "../../assets/icon/image.png";

const CardAbout = ({image,tittle,text}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} className="mb-2" />
      <p className="text-black text-lg font-medium">{tittle}</p>
      <p className="text-center max-w-[16rem] mt-3 text-md">
        {text}
      </p>
    </div>
  );
};

export default CardAbout;