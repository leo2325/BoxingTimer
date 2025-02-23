import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
//import { useDispatch, useSelector } from 'react-redux';
//import { setExerciseTime, setRestTime, setTotalRepetitions } from '../../redux/TimerPlayerSlices';
import styles from '../../styles/body.styles'; 

const TimerForm = () => {

    const handleTimeChange = (unit, value, isExercise) => {
        const formattedValue = formatValue(value, unit === 'minutes' ? 99 : 59);
        const [minutes, seconds] = isExercise ? exerciseTime.split(':') : restTime.split(':');
        const updatedTime = unit === 'minutes'
            ? `${formattedValue}:${seconds}`
            : `${minutes}:${formattedValue}`;
        if (isExercise) {
            dispatch(setExerciseTime(updatedTime));
        } else {
            dispatch(setRestTime(updatedTime));
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.bodyTitles}>SET TIMER</Text>
                <View style={[styles.contentContainer, { alignItems: 'center' }]}>
                    <View style={[
                        styles.timerFormContainers, 
                        //selectedInput === 'totalRepetitions' && styles.greenNeonBorderBG
                    ]}>            
                        <View style={styles.formInput}>
                            <TextInput 
                                keyboardType="numeric"
                                //value={String(totalRepetitions)}
                                onFocus={() => setSelectedInput('totalRepetitions')}
                                onBlur={() => setSelectedInput(null)}
                                onChangeText={(value) => dispatch(setTotalRepetitions(formatValue(value, 99)))}
                                style={[styles.input, 
                                //selectedInput === 'totalRepetitions' && styles.greenNeonText
                            ]}
                            />
                        </View>
                    </View>
                    <Text style={styles.commonHeading}>ROUND X</Text>
                    <View style={[styles.timerFormContainers, 
                        //(selectedInput === 'exerciseMinutes' || selectedInput === 'exerciseSeconds') && styles.greenNeonBorderBG
                    ]}>        
                        <View style={styles.formInput}>
                            <TextInput 
                                keyboardType="numeric"
                                //value={exerciseTime.split(':')[0]}
                                onFocus={() => setSelectedInput('exerciseMinutes')}
                                onBlur={() => setSelectedInput(null)}
                                onChangeText={(value) => handleTimeChange('minutes', value, true)}
                                style={[
                                    styles.input, 
                                    //selectedInput === 'exerciseMinutes' && styles.greenNeonText
                                ]}
                            />
                            <Text style={[
                                styles.label, 
                                //</View>selectedInput === 'exerciseMinutes' && { display: 'block' }
                            ]}>MIN</Text>
                        </View>
                                
                        <View style={styles.formInput}>
                            <TextInput 
                                keyboardType="numeric"
                                //value={exerciseTime.split(':')[1]}
                                onFocus={() => setSelectedInput('exerciseSeconds')}
                                onBlur={() => setSelectedInput(null)}
                                onChangeText={(value) => handleTimeChange('seconds', value, true)}
                                style={[
                                    styles.input, 
                                    //selectedInput === 'exerciseSeconds' && styles.greenNeonText
                                ]}
                            />
                            <Text style={[
                                styles.label, 
                                //</View>selectedInput === 'exerciseSeconds' && { display: 'block' }
                            ]}>SEC</Text>
                        </View>
                    </View>
                    <Text style={styles.commonHeading}>TEMPS DE REPOS</Text>
                    <View style={[
                        styles.timerFormContainers, 
                        //(selectedInput === 'restMinutes' || selectedInput === 'restSeconds') && styles.greenNeonBorderBG
                    ]}>        
                        <View style={styles.formInput}>
                            <TextInput 
                                keyboardType="numeric"
                                //value={restTime.split(':')[0]}
                                onFocus={() => setSelectedInput('restMinutes')}
                                onBlur={() => setSelectedInput(null)}
                                onChangeText={(value) => handleTimeChange('minutes', value, false)}
                                style={[
                                    styles.input,
                                    //selectedInput === 'restMinutes' && styles.greenNeonText
                                ]}
                            />
                            <Text style={[styles.label, 
                                //</View>selectedInput === 'restMinutes' && { display: 'block' }
                            ]}>MIN</Text>
                        </View>
                        <View style={styles.formInput}>
                            <TextInput 
                                keyboardType="numeric"
                                //value={restTime.split(':')[1]}
                                onFocus={() => setSelectedInput('restSeconds')}
                                onBlur={() => setSelectedInput(null)}
                                onChangeText={(value) => handleTimeChange('seconds', value, false)}
                                style={[
                                    styles.input, 
                                    //selectedInput === 'restSeconds' && styles.greenNeonText
                                ]}
                            />
                            <Text style={[
                                styles.label, 
                                //</View>selectedInput === 'restSeconds' && { display: 'block' }
                            ]}>SEC</Text>
                        </View>

                    </View>
                </View>
        </View>
    );
};

export default TimerForm;
