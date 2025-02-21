import React from 'react';
import { View, Image } from 'react-native';
import logo from '../../assets/img/logo.png';
import styles from '../../styles/header.styles';

const Logo = ({ width = 80, height = 80, paddingVertical = 0 }) => {
    return (
        <View style={[styles.logoContainer, { paddingVertical }]}> 
            <Image style={[styles.logoImg, { width, height }]} source={logo} />
        </View>
    );
};

export default Logo;
