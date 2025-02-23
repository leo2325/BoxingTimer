import React from 'react';
import { View } from 'react-native';
import Home from '../components/body/Home';
import AudioOptions from '../components/body/AudioOptions';
import TimerForm from '../components/body/TimerForm';
import TimerScreen from '../components/body/TimerScreen';
import styles from '../styles/body.styles';

const BodyPage = ({ activePage, showTimerScreen, onSaveAudio }) => {
  return (
    <View style={styles.bodyContainer}>
      {activePage === 'home' && <Home />}
      {activePage === 'timerForm' && (showTimerScreen ? <TimerScreen /> : <TimerForm />)}
      {activePage === 'audio' && <AudioOptions onSaveAudio={onSaveAudio} />}
    </View>
  );
};

export default BodyPage;
