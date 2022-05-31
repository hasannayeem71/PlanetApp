import React from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacing } from "../theme";
import Text from "./text/text";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text preset="small" style={styles.title}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default PlanetSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
    borderRadius:5
  },
  title: {
    textTransform: "uppercase",
  },
});
