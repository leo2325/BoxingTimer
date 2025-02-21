import React from 'react';
import { View } from 'react-native';
import Home from '../components/body/Home';
import styles from '../styles/body.styles';

const Body = () => {
  return (
    <View style={styles.body}>
        <Home />
    </View>
  );
};

export default Body;
