import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/header.styles';

const SoundToggle = () => {
    return (
        <TouchableOpacity style={styles.soundToggleContainer}>
            <Icon name="volume-up" style={styles.soundToggleIcon} />
        </TouchableOpacity>
    );
};

export default SoundToggle;
