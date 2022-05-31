import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { PlanetHeader, Text } from "../components";
import { andriodSafeArea, colors, spacing } from "../theme";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [list,setList]=useState(data)
  useEffect(() => {
    fetch("https://hasannayeem71.github.io/data/planates.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setList(data)
      });
  }, []);
  const searchFilter = (text) => {
    const filteredList = data.filter((item) => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();
      return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { planet: item })}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circle, { backgroundColor: item.color }]} />
        <Text preset="h4" style={styles.itemName}>
          {item.name}
        </Text>
      </View>

      <AntDesign name="right" size={18} color="white" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={andriodSafeArea.AndroidSafeArea}>
      <PlanetHeader />
      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    padding: spacing[4],
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  separator: {
    height: 0.5,
    backgroundColor: colors.white,
    marginLeft: spacing[5],
    marginRight: spacing[5],
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
