import React, { useState } from "react";

import { Searchbar } from "react-native-paper";

import { View, StyleSheet } from "react-native";

const CountryPicker = ({ handleCountryChange }) => {
  const [query, setQuery] = useState("");
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search by Country"
        value={query}
        onChangeText={(val) => setQuery(val)}
        onIconPress={() => handleCountryChange(query)}
      ></Searchbar>
    </View>
  );
};

export default CountryPicker;
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 15,
    marginHorizontal: 25,
  },
});
