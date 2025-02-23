
import { StyleSheet } from 'react-native';
import { COLORS } from './variables';

const styles = StyleSheet.create({
    //FOOTER
    footerContainer: {
        height: '30%',
        width: '100%',   
        backgroundColor: 'black',
      },

    //NAV
    navContainer: {
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    navIcon: {
        fontSize: 24,
        color: COLORS.blueNeon, 
        textAlign: 'center',
    },
    menuItemText: {
        color: COLORS.blueNeon, 
        fontSize: 12,
        textAlign: 'center',
    },
});

export default styles;