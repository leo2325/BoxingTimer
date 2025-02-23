import React, { useEffect } from 'react';
import { View, Text } from 'react-native'; 
//import { useSelector, useDispatch } from 'react-redux';
//import { startTimer, pauseTimer, resetTimer, tick } from '../../redux/TimerPlayerSlices';
import styles from '../../styles/body.styles'; 

const TimerScreen = () => {
    /*const dispatch = useDispatch();
    const {
        totalRepetitions,
        currentRepetition,
        isRunning,
        isExercisePhase,
        phaseTime,
        isTimerFinished
    } = useSelector(state => state.timerPlayer);
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
            dispatch(tick());
        }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, dispatch]);


    const getInputContainerStyle = () => {
        if (!isRunning) return styles.redNeonBorderBG;
        return isExercisePhase ? styles.greenNeonBorderBG : styles.blueNeonBorderBG;
    };
    const getNeonTextStyle = () => {
        if (!isRunning) return styles.redNeonText;
        return isExercisePhase ? styles.greenNeonText : styles.blueNeonText;
    };*/


    const formatNumber = (num) => num.toString().padStart(2, '0');

    return (
        <View style={styles.mainContainer}>

            <Text style={styles.bodyTitles}>ROUND</Text>

            <View style={styles.contentContainer}>     
                <View style={[
                    styles.timerScreenContainer, 
                    //getInputContainerStyle()
                ]}>
                    <Text style={[
                        styles.repetitionText, 
                        //getNeonTextStyle()
                    ]}>
                    </Text>
                    <Text style={[
                        styles.timerText, 
                        //getNeonTextStyle()
                    ]}>
                    </Text>
                </View>           
                <View style={styles.exercisePhaseContainer}>
                    <Text style={styles.exercisePhaseText}>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default TimerScreen;
