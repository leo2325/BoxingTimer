import { StyleSheet } from 'react-native';
import { COLORS } from './variables';

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
    },

    headerContainer: {
        height: '15%',
        width: '100%',
        backgroundColor: 'black',
    },

    bodyContainer: {  
        height: '75%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footerContainer: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
    },

});

export default styles;
