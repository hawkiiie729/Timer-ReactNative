import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const App = () => {
  const [timerValue, setTimerValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimerValue(prevValue => prevValue + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimerValue(0);
    setIsRunning(false);
  };

  return (
    <View style={{backgroundColor: 'white', height: responsiveHeight(100)}}>
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(5),
          fontWeight: '800',
          textAlign: 'center',
        }}>
        Timer App
      </Text>
      <View
        style={{
          marginTop: responsiveHeight(8),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./src/Assets/hourglass.gif')}
          style={{height: responsiveHeight(15), width: responsiveWidth(25)}}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: responsiveFontSize(4),
            color: 'black',
            textAlign: 'center',
          }}>
          {timerValue} seconds
        </Text>
        <TouchableOpacity
          onPress={isRunning ? stopTimer : startTimer}
          style={{
            backgroundColor: 'black',
            marginTop: responsiveHeight(4),
            width: responsiveWidth(80),
            height: responsiveHeight(6),
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: responsiveWidth(10),
          }}>
          <Text style={{color: 'white'}}>{isRunning ? 'Stop' : 'start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={resetTimer}
          style={{
            backgroundColor: 'black',
            marginTop: responsiveHeight(4),
            width: responsiveWidth(80),
            height: responsiveHeight(6),
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: responsiveWidth(10),
          }}>
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: responsiveHeight(40)}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: responsiveFontSize(2),
            fontWeight: '600',
          }}>
          ©Sudhanshu Mishra
        </Text>
      </View>
    </View>
  );
};

export default App;
