import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Loading from "./components/Loading";
import * as Location from "expo-location";
import { openWeather_API_KEY } from "./apikeys";
import axios from "axios";
import Weather from "./components/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null
    };
  }
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${openWeather_API_KEY}&units=metric`
    );
    this.setState({ loading: false, data: data });
    console.log(data);
    return data;
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);
    } catch (e) {
      Alert.alert("승인 요청 실패", "위치 정보 승인을 해주세요.");
      console.log(e);
    }
  };
  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    this.getLocation();
  }
  render() {
    const { loading, data } = this.state;

    if (loading) {
      return <Loading />;
    } else if (!data) {
      return null;
    } else {
      const {
        main: { temp }
      } = data;
      return <Weather temp={Math.ceil(temp)} />;
    }
  }
}

export default App;
