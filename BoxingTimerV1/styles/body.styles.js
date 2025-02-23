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








    // TIMER PAGES
    timerFormContainers: {
        width: '80%',
        height: 96,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        /**/
        backgroundColor: COLORS.redNeonBlackBG,
        borderColor: COLORS.redNeon,
        shadowColor: COLORS.redNeon,
        /**/
        ...NEONBORDERS.thickNeonBorder,
    },
    formInput: {
        margin: 'auto'
    },
        input: {
            fontSize: 96,
            fontFamily: FONTS.time,
            textAlign: 'center',
            textAlignVertical: 'center',
            /**/
            color: COLORS.redNeon,
            /**/
            textShadowColor: COLORS.redNeon,
            /**/
            textShadowRadius: 20,
            /**/
        },
        label: {
            display: 'none',
            color: COLORS.greenNeon,
            textAlign: 'center',
            textAlignVertical: 'top',
            height: 12,
            fontSize: 10,
            fontFamily: FONTS.time,
            marginTop: -12,
        },


        //TIMERSCREEN
        timerScreenContainer: {
            width: '96%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            ...NEONBORDERS.thinNeonBorder,   
        },
        timerScreenContainer: {
            width: '96%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            ...NEONBORDERS.thinNeonBorder,   
        },
            repetitionText: {
                width: '100%',
                textAlign: 'center',
                fontFamily: FONTS.time,
                fontSize: 88,
                /**/ 
                textShadowRadius: 8,
                /**/
            },
            timerText: {
                width: '100%',
                textAlign: 'center',
                fontFamily: FONTS.time,
                textShadowRadius: 8,
                /**/
                fontSize: 160,
                /**/
            },
        exercisePhaseContainer: {
                borderRadius: 32,
            width: '100%',
            height: '32%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
            exercisePhaseText: {
                width: '100%',
                color: COLORS.blueNeon,
                fontFamily: FONTS.normalItalic,
                fontSize: 112,
                textAlign: 'center',
            },

    
});


export default styles;