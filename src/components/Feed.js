import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import Constants from 'expo-constants';

export const Feed = ({data}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        {data.map((text, index) => (
          <Paragraph key={index} style={styles.text}>
            {text}
          </Paragraph>
        ))}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    marginBottom: 14,
  },
});
