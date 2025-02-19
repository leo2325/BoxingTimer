import React, { useState } from 'react';
import { View } from 'react-native';
import Logo from '../components/header/Logo';
import SoundToggle from '../components/header/SoundToggle';
import styles from '../styles/header.styles';

const Header = () => {

    return (
        <View style={styles.header}>
            <SoundToggle />
            <Logo />
        </View>
    );
};

export default Header;