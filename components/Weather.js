import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

function Weather({ temp }) {
  return (
    <View style={Styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
