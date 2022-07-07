import React from "react";
import { Image } from "antd";
import "./PhoneImage.scss";

export default function PhoneImage() {
  return (
    <div className="signup__container">
      <Image
        src={require("../../../assets/img/phone.jpg")}
        height={450}
        width={300}
        preview={false}
      />
    </div>
  );
}
