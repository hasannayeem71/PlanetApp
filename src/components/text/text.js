import React from "react";
import { StyleSheet, Text as RnText } from "react-native";
import { presets } from "./text.preset";

export default function Text({
  children,
  preset = "default",
  style,
  ...props
}) {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return (
    <RnText style={textStyles} {...props}>
      {children}
    </RnText>
  );
}
