import { Audio } from 'expo-av';

// Importation de tous les sons
const sounds = {
    combatMinutes: require('../assets/audio/fight/combatMinutes.mp3'),
    combat30Sec: require('../assets/audio/fight/combat30Sec.mp3'),
    combat10Sec: require('../assets/audio/fight/combat10Sec.mp3'),
    //rest
    restMinutes: require('../assets/audio/rest/restMinutes.mp3'),
    rest30Sec: require('../assets/audio/rest/rest30Sec.mp3'),
    rest10Sec: require('../assets/audio/rest/rest10Sec.mp3'),
    // phaseType
    CEstParti: require('../assets/audio/phaseType/CEstParti.mp3'),
    Combattez: require('../assets/audio/phaseType/Combattez.mp3'),
    Repos: require('../assets/audio/phaseType/Repos.mp3'),
    Pause: require('../assets/audio/phaseType/Pause.mp3'),
    AllezOnReprend: require('../assets/audio/phaseType/AllezOnReprend.mp3'),
    DernierRound: require('../assets/audio/phaseType/DernierRound.mp3'),
    AllezDernierRound: require('../assets/audio/phaseType/AllezDernierRound.mp3'),
    FinDeLExercice: require('../assets/audio/phaseType/FinDeLExercice.mp3'),
    // bips
    BipTime: require('../assets/audio/bips/BipTime.mp3'),
    ClicBtn: require('../assets/audio/bips/ClicBtn.mp3'),
    Bell1Hit: require('../assets/audio/bips/Bell1Hit.mp3'),
    Bell2Hit: require('../assets/audio/bips/Bell2Hit.mp3'),
    Bell3Hit: require('../assets/audio/bips/Bell3Hit.mp3'),
    // coups
    //CoupPuissantX1: require('../assets/audio/coups/coupsPuissants/1CoupPuissantAuBip.mp3'),
    //CoupPuissantX2: require('../assets/audio/coups/coupsPuissants/2CoupPuissantsAuBip.mp3'),
    //CoupPuissantX3: require('../assets/audio/coups/coupsPuissants/3CoupPuissantsAuBip.mp3'),
    //CoupRapideX3: require('../assets/audio/coups/coupsRapides/3CoupsRapidesAuBip.mp3'),
    //DirectAvant: require('../assets/audio/coups/direct/DirectBrasAvant.mp3'),
    //DirectArrière: require('../assets/audio/coups/direct/DirectBrasArriere.mp3'),
    //DirectAvantArrière: require('../assets/audio/coups/direct/DirectBrasAvantBrasArriere.mp3'),
    //CrochetAvant: require('../assets/audio/coups/crochet/CrochetBrasAvant.mp3'),
    //CrochetArriere: require('../assets/audio/coups/crochet/CrochetBrasArriere.mp3'),
    //CrochetAvantArriere: require('../assets/audio/coups/crochet/CrochetBrasAvantBrasArriere.mp3'),
    //UppercutAvant: require('../assets/audio/coups/uppercut/UppercutBrasAvant.mp3'),
    //UppercutArriere: require('../assets/audio/coups/uppercut/UppercutBrasArriere.mp3'),
    //UppercutAvantArriere: require('../assets/audio/coups/uppercut/UppercutBrasAvantBrasArriere.mp3'),
    // workType
    //TravailPuissance: require('../assets/audio/workType/TravailEnPuissance.mp3'),
    //TravailVitesse: require('../assets/audio/workType/TravailEnVitesse.mp3'),
    // intervals
    //Interval5Sec: require('../assets/audio/intervals/Interval5Sec.mp3'),
    //Interval10Sec: require('../assets/audio/intervals/Interval10Sec.mp3'),
    //Interval30Sec: require('../assets/audio/intervals/Interval30Sec.mp3'),
};

let preloadedSounds = {};

export const preloadSounds = async () => {
    try {
        console.log('Preloading sounds...');
        for (const [key, soundFile] of Object.entries(sounds)) {
            console.log(`Preloading ${key}`);
            const { sound } = await Audio.Sound.createAsync(soundFile);
            preloadedSounds[key] = sound;
        }
        console.log('Sounds preloaded successfully');
    } catch (error) {
        console.error('Error preloading sounds:', error);
    }
};

export const playPreloadedSound = async (soundName) => {
    try {
        console.log(`Playing sound: ${soundName}`);
        const sound = preloadedSounds[soundName];
        if (sound) {
            // Configurer le mode audio pour Android
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true, // Ce paramètre est ignoré sur Android
                staysActiveInBackground: true,
                shouldDuckAndroid: true, // Réduit le volume des autres applications sur Android
            });

            await sound.replayAsync();
        } else {
            console.warn(`Sound ${soundName} not found.`);
        }
    } catch (error) {
        console.error('Error playing sound:', error);
    }
};

export const unloadSounds = async () => {
    try {
        for (const sound of Object.values(preloadedSounds)) {
            await sound.unloadAsync();
        }
        preloadedSounds = {};
        console.log('Sounds unloaded successfully');
    } catch (error) {
        console.error('Error unloading sounds:', error);
    }
};

export default sounds;
