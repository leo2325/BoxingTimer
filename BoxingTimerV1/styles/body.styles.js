import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from './variables';

const styles = StyleSheet.create({
    
    // BODY MAIN CONTAINER
    bodyContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

        backgroundColor: 'black',

    },

    // BODY TITLES PAGES
    bodyTitles: { 
        width: '100%',
        height: 80,
        //fontFamily: FONTS.fight,
        fontSize: 40,
        color: COLORS.blueNeonBlackBG,
        textAlign: 'center',
        textAlignVertical: 'center',
        textShadowColor: COLORS.blueNeon,  
        textShadowRadius: 16,  
    },
    // BODY CONTENT CONTAINER
    contentContainer: {
        width: '80%',
        height: '100%',
        display: 'flex',
    },
    bodyLogo: {
        width: 128,
        height: 128,
        resizeMode: 'stretch',
    },
    // CONTENT HEADING
    commonHeading: { 
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 'auto',
        marginVertical: 2,
        textShadowColor: COLORS.blueNeon,  
        textShadowRadius: 16, 
        fontFamily: FONTS.normal,
        color: COLORS.blueNeonBlackBG,
        minHeight: 56,
        fontSize: 28,
    },
});


export default styles;