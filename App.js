import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// api Calls import
import { fetchData, fetchTodayData } from "./components/api";

// Components import
import { Card_, CountryPicker, Today } from "./components";

export default function App() {
  const [data, setData] = useState({}); //State for overall data
  const [todayData, setTodayData] = useState(); //State for current data
  const [country, setCountry] = useState(""); //State to observe search bar

  // Function to change country's first letter to capital
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Handles the search event
  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    const fetchedTodayData = await fetchTodayData(country);
    setData(fetchedData);
    setTodayData(fetchedTodayData);
    setCountry(capitalize(country));
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchData();
      const fetchedToday = await fetchTodayData();
      setData(fetchedData);
      setTodayData(fetchedToday);
    };

    fetchAPI();
  }, []);

  // Navigation Initaialization
  const Tab = createBottomTabNavigator();
  let header = "World's Data";
  if (country) {
    header = `${country}'s Data`;
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CountryPicker handleCountryChange={handleCountryChange} />
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Overall">
          {() => <Card_ data={data} header={header} />}
        </Tab.Screen>
        <Tab.Screen name="Today">
          {() => <Today todayData={todayData} header={header}></Today>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
