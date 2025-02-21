import { StyleSheet } from 'react-native';
import { COLORS, FONTS, NEONBORDERS } from './variables';

const styles = StyleSheet.create({
    
    // BODY MAIN CONTAINER
    body: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // TITRE HAUT DE PAGES
    bodyTitles: { 
        width: '100%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginVertical: 8,
        fontSize: 32,
        color: COLORS.blueNeonBlackBG,
        fontFamily: FONTS.fight,
        textShadowColor: COLORS.blueNeon,  
        textShadowRadius: 16,  
    },
    // MAIN CONTAINER
    mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    // CONTENT HEADING
    commonHeading: { 
        width: '100%',
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        textShadowColor: COLORS.blueNeon,  
        textShadowRadius: 16, 
        fontFamily: FONTS.fight,
        color: COLORS.blueNeonBlackBG,
        fontSize: 16,
    },
    // BODY CONTENT CONTAINER
    contentContainer: {
        width: '80%',
        //height: '100%',
    },

        // COACH VOICE OPTIONS 
        optionRow: {
            marginVertical: 6,
            width: '80%',
            height: 56,
            ...NEONBORDERS.thinNeonBorder, 
        },
        optionText: {         
            margin: 'auto',
            fontSize: 28,
            fontFamily: FONTS.time,
            /**/ 
            textShadowRadius: 12, 
            elevation: 24,
            /**/
        },

    
});


export default styles;