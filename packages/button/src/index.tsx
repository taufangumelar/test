import React from "react";
import { Button as RNButton, ButtonProps } from "react-native";

const Button = (props: ButtonProps) => {
  return <RNButton {...props} />;
};

export default Button;
