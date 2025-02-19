import { StyleSheet } from 'react-native';
import { COLORS } from './variables';

const styles = StyleSheet.create({
    
    // INDEX.TSX
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    headerContainer: {
        height: '15%',
    },
    bodyContainer: {
        height: '65%',
        zIndex: 1100,
    },
    footerContainer: {
        height: '20%',
    }, 
});

export default styles;