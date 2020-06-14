import React from "react";
import { Card, Title, Paragraph, Headline } from "react-native-paper";

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";

const Today = ({ todayData, header }) => {
  if (todayData) {
    const { todayCases, todayRecovered, todayDeaths, updated } = todayData;
    return (
      <View style={{ marginTop: 15 }}>
        <Headline style={{ textAlign: "center" }}>{`${header} today`}</Headline>
        <ScrollView>
          <Card style={[styles.card, styles.confirmed]}>
            <Card.Content>
              <Title style={{ textAlign: "center" }}>Confirmed</Title>
              <Paragraph>{todayCases}</Paragraph>
              <Paragraph>{new Date(updated).toDateString()}</Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.card, styles.recovered]}>
            <Card.Content>
              <Title style={{ textAlign: "center" }}>Recovered</Title>
              <Paragraph>{todayRecovered}</Paragraph>
              <Paragraph>{new Date(updated).toDateString()}</Paragraph>
            </Card.Content>
          </Card>

          <Card style={[styles.card, styles.deaths]}>
            <Card.Content>
              <Title style={{ textAlign: "center" }}>Deaths</Title>
              <Paragraph>{todayDeaths}</Paragraph>
              <Paragraph>{new Date(updated).toDateString()}</Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
};

export default Today;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    marginHorizontal: 35,
  },

  confirmed: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(0,0,255,0.5)",
  },

  recovered: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(0,255,0,0.5)",
  },

  deaths: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(255,0,0,0.5)",
  },
});
