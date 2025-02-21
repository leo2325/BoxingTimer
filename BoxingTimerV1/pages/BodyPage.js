import React from 'react';
import { View } from 'react-native';
import Home from '../components/body/Home';
import AudioOptions from '../components/body/AudioOptions';
import styles from '../styles/body.styles';

const Body = () => {
  return (
    <View style={styles.body}>
        <AudioOptions />
    </View>
  );
};

export default Body;
