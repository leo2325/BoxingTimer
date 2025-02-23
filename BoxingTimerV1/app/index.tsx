import { View } from "react-native";
import { useFonts } from "expo-font";  

import Header from '../pages/HeaderPage';
import Body from '../pages/BodyPage';
import Footer from '../pages/FooterPage';
import styles from '../styles/app.styles.js';

export default function Page() {
    // Charger la police
    const [fontsLoaded] = useFonts({
        FatalFighter: require('../assets/fonts/FatalFighter.ttf'),
        DsDigi: require('../assets/fonts/DsDigi.ttf'),
        HarvestItalic: require('../assets/fonts/HarvestItalic.ttf'),
        HarvestRegular: require('../assets/fonts/HarvestRegular.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Empêcher le rendu tant que la police n'est pas chargée
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            
            <View style={styles.bodyContainer}>
                <Body />
            </View>

            <View style={styles.footerContainer}>
                <Footer />
            </View>
        </View>
    );
}
