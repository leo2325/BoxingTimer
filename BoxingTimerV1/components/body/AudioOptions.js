import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
//import styles from '../../styles/CoachVoiceForm.styles.js';
import styles from '../../styles/body.styles.js';

const CustomCheckBox = ({ label, checked, onChange, onLongPress }) => (
    <TouchableOpacity
        onPress={onChange}
        onLongPress={onLongPress}
        delayLongPress={500}
        style={[
            styles.optionRow, 
            !checked && styles.redNeonBorderBG,
            checked && styles.greenNeonBorderBG 
          ]}
        >
        <Text 
            style={[
                styles.optionText, 
                !checked && styles.redNeonText,
                checked && styles.greenNeonText
            ]}
        >
            {label}
        </Text>
    </TouchableOpacity>
);


const AudioOptions = () => {

    return (
        <View style={styles.mainContainer}>
      
            <Text style={styles.bodyTitles}>COACH VOICE</Text>
            
            <ScrollView
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 24,
                }}
                style={styles.contentContainer}
            > 

                <CustomCheckBox
                    label="Coach Voice"
                    //checked={options.isCoachVoiceChecked}
                    //onChange={() => dispatch(setOptions({ isCoachVoiceChecked: !options.isCoachVoiceChecked }))}
                    //onLongPress={() => handlePlaySound('coachVoice')}
                />
            
                <Text style={styles.commonHeading}>TEMPS COMBAT</Text>

                <CustomCheckBox
                    label="1 minute"
                    //checked={options.isCombatMinutesChecked}
                    //onChange={() => dispatch(setOptions({ isCombatMinutesChecked: !options.isCombatMinutesChecked }))}
                    //onLongPress={() => handlePlaySound('combatMinutes')}
                />
                <CustomCheckBox
                    label="30 secondes"
                    //checked={options.isCombat30SecChecked}
                    //onChange={() => dispatch(setOptions({ isCombat30SecChecked: !options.isCombat30SecChecked }))}
                    //onLongPress={() => handlePlaySound('combat30Sec')}
                />
                <CustomCheckBox
                    label="10 secondes"
                    //checked={options.isCombat10SecChecked}
                    //onChange={() => dispatch(setOptions({ isCombat10SecChecked: !options.isCombat10SecChecked }))}
                    //onLongPress={() => handlePlaySound('combat10Sec')}
                />
                
                <Text style={styles.commonHeading}>TEMPS REPOS</Text>

                <CustomCheckBox
                    label="1 minute"
                    //checked={options.isRestMinutesChecked}
                    //onChange={() => dispatch(setOptions({ isRestMinutesChecked: !options.isRestMinutesChecked }))}
                    //onLongPress={() => handlePlaySound('restMinutes')}
                />
                <CustomCheckBox
                    label="30 secondes"
                    //checked={options.isRest30SecChecked}
                    //onChange={() => dispatch(setOptions({ isRest30SecChecked: !options.isRest30SecChecked }))}
                    //onLongPress={() => handlePlaySound('rest30Sec')}
                />
                <CustomCheckBox
                    label="Imminent Start"
                    //checked={options.isImminentStartChecked}
                    //onChange={() => dispatch(setOptions({ isImminentStartChecked: !options.isImminentStartChecked }))}
                    //onLongPress={() => handlePlaySound('imminentStart')}
                />
            </ScrollView>
        </View>
    );
};

export default AudioOptions;
