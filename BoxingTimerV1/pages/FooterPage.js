import React from 'react';
import { View } from 'react-native';
import Nav from '../components/footer/Nav';
import styles from '../styles/footer.styles';

const FooterPage = () => {
    return (
        <View style={styles.footer}>
            <Nav />
        </View>
    );
};

export default FooterPage;
