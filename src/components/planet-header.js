import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors, spacing } from "../theme";
import Text from "./text/text";
const PlanetHeader = ({ backBtn,title='THE PLANETS'  }) => {
    const navigation = useNavigation()  ;
  return (
    <View style={styles.contaier}>
      {backBtn && (
        <Pressable style={{marginRight:spacing[4]}} onPress={()=>navigation.goBack()}>
          <AntDesign name="leftcircleo" size={24} color={colors.white} />
        </Pressable>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
};

export default PlanetHeader;

const styles = StyleSheet.create({
  contaier: {
    padding: spacing[5],
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
    flexDirection: "row",
    alignItems:'center'
  },
});
