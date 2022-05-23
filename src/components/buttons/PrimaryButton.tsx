import React, { ReactNode } from "react";

const PrimaryButton = ({ text }: { text: ReactNode }) => {
  return <button>{text}</button>;
};

export default PrimaryButton;
