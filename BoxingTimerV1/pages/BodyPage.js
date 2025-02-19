import React from 'react';
import { View } from 'react-native';
import Home from '../components/body/Home';
import styles from '../styles/header.styles';

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
        <Home />
    </View>
  );
};

export default Body;
