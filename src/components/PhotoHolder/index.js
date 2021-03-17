import React from "react";
import { PhotoWrapper } from "./styles.js";

//assets
import AHK from "assets/AHK.jpg";

export const PhotoHolder = () => {
  return (
    <PhotoWrapper>
      <img alt="ahk" src={AHK} />
    </PhotoWrapper>
  );
};
