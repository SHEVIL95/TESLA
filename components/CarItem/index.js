import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyleButton from "../StyleButton";
const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
          source={require('../../assets/images/ModelS.jpeg')}
          style={styles.image}
          ></ImageBackground>
      <View style={styles.titles}>
    <Text style={styles.title}> Model S</Text>
    <Text style={styles.subtitle}>Starting at 6,99,999/- only</Text>
    </View>
    <StyleButton/>
    </View>
    );
};

export default CarItem;