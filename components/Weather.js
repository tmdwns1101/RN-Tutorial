import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~"
  },
  Mist: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~"
  },
  Smoke: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~"
  },
  Fog: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~"
  },
  Ash: {
    iconName: "weather-fog",
    color: ["#606c88", "#3f4c6b"],
    title: "안개가 짙어요.",
    subtitle: "운전이나 야외 활동 할 때 조심하세요~"
  },
  Dust: {
    iconName: "weather-fog",
    color: ["#544a7d", "#ffd452"],
    title: "먼지가 많아요.",
    subtitle: "야외 활동을 삼가해주세요. 마스크는 필수!!"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    color: ["#232526", "#414345"],
    title: "폭풍우 에요!!",
    subtitle: "오늘은 집돌이 집순이가 됩시다 ㅎㅎ"
  },
  Drizzle: {
    iconName: "weather-rainy",
    color: ["#4c669f", "#3b5998", "#192f6a"],
    title: "비가 조금씩 떨어져요.",
    subtitle: "'가랑비에 옷 젖는 줄 모른다' 라는 속담이 있죠. 우산 가져가세요~~"
  },
  Rain: {
    iconName: "weather-pouring",
    color: ["#0f0c29", "#302b63", "#24243e"],
    title: "비가 많이 와요!!",
    subtitle: "우산 꼭 꼭 챙기세요!!"
  },
  Snow: {
    iconName: "weather-snowy",
    color: ["#757f9a", "#d7dde8"],
    title: "눈이 내려요.",
    subtitle: "야외 활동시 미끄러지지 않게 조심하세요!"
  },
  Clear: {
    iconName: "weather-sunny",
    color: ["#2193b0", "#6dd5ed"],
    title: "날씨가 맑아요.",
    subtitle: "오늘 야외 활동을 해보는게 어때요??"
  },
  Clouds: {
    iconName: "weather-cloudy",
    color: ["#403b4a", "#e7e9bb"],
    title: "구름이 많아요.",
    subtitle: "날씨가 꿀꿀 하지만 신나는 음악으로 기분 전환 해봐요~"
  }
};

function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].color}
      style={Styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={Styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={Styles.tempText}>{temp}℃</Text>
      </View>
      <View style={{ ...Styles.halfContainer, ...Styles.textContainer }}>
        <Text style={Styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={Styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

export default Weather;

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash"
  ]).isRequired
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tempText: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 15
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
