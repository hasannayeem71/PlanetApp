import React from "react";
import {
  Linking, Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { PlanetHeader, Text } from "../components";
import PlanetSection from "../components/planet-section";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg
} from "../svg";
import { andriodSafeArea, spacing } from "../theme";
const Details = ({ navigation, route }) => {
  const { planet } = route.params;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;
  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };
  const renderImage = () => {
    switch (name.toLowerCase()) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;
    }
  };

  return (
    <SafeAreaView style={andriodSafeArea.AndroidSafeArea}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.planetImageView}>{renderImage()}</View>

        <View style={styles.detailsView}>
          <Text style={styles.name} preset="h1">
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wiki}>
              wikipedia
            </Text>
          </Pressable>
        </View>

        <PlanetSection title={"ROTATION TIME"} value={rotationTime} />
        <PlanetSection title={"REVOLUTION TIME"} value={revolutionTime} />
        <PlanetSection title={"RADIUS"} value={radius} />
        <PlanetSection title={"AVERAGE TEMP"} value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  planetImageView: {
    marginTop: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[5],
  },
  wiki: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
