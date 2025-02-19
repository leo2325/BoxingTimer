// variables.js
export const COLORS = {
    
    primary: '#aab5ac',
    secondary: '#65989b',
    third: '#00070c',
    
    background: '#c4d1cf',
    background: '#070707',
    
    // New Colors : 
    black: '#000000',
    white: '#ffffff',
    // Black BG
        BlackBG: '#070707',
    // Neon Color:
        greenNeon: '#00FF00',
        redNeon: '#ff0000',
        blueNeon: '#00a1ff',
    // BlackBG Neon
        greenNeonBlackBG: '#050c00',
        redNeonBlackBG: '#0c0000',
        blueNeonBlackBG: '#00070c',
    // whiteBG Neon
        greenNeonWhiteBG: '#00FF00',
        redNeonwhiteBG: '#ff0000',
        blueNeonWhiteBG: '#00a1ff',
};
  
export const SIZES = {
    small: 12,
    medium: 16,
    large: 20,
};
  
export const FONTS = {  
    fight: 'FatalFighter',
    title: 'superchargestraightexpand',
    normal: 'harvestRegular',
    normalItalic: 'harvestItalic',
    time: 'DsDigi',
};

export const NEONBORDERS = {
    thinNeonBorder: {
        borderRadius: 32,
        borderTopWidth: 0,
        borderLeftWidth: .2,
        borderRightWidth: .2,
        borderBottomWidth: 2,
        shadowRadius: 12,
        elevation: 16, 
    },
    thickNeonBorder: {
        borderRadius: 32,
        borderTopWidth: 0,
        borderLeftWidth: .4,
        borderRightWidth: .4,
        borderBottomWidth: 4,
        shadowRadius: 24,
        elevation: 32, 
    },

        // Styles pour les textes néon
        blueNeonText: {
            color: COLORS.blueNeon,
            textShadowColor: COLORS.blueNeon,
        },
        greenNeonText: {
            color: COLORS.greenNeon,
            textShadowColor: COLORS.greenNeon,
        },
        redNeonText: {
            color: COLORS.redNeon,
            textShadowColor: COLORS.redNeon,
        },
        // Styles pour les bordures néon
        blueNeonBorderBG: {
            borderColor: COLORS.blueNeon,
            backgroundColor: COLORS.blueNeonBlackBG,
            shadowColor: COLORS.blueNeon,
        },
        greenNeonBorderBG: {
            borderColor: COLORS.greenNeon,
            backgroundColor: COLORS.greenNeonBlackBG,
            shadowColor: COLORS.greenNeon,
        },
        redNeonBorderBG: {
            borderColor: COLORS.redNeon,
            backgroundColor: COLORS.redNeonBlackBG,
            shadowColor: COLORS.redNeon,
        },
};
