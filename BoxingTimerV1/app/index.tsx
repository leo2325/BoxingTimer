import { StyleSheet, View } from "react-native";
import Header from '../pages/HeaderPage';
import Body from '../pages/BodyPage';
import styles from '../styles/app.styles.js';

export default function Page() {
    return (
        <View style={styles.container}>
            
            <View>
			    <Header />
		    </View>
            
            <View>
			    <Body />
		    </View>
        
        </View>
    );

};
