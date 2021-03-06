import React from 'react';
import {View, Text, Pressable } from 'react-native';
import styles from './styles';
const StyleButton = (props) => {
    return (
        <View style={styles.container}>
           <Pressable
           style={styles.button}
           onPress={() => {
               console.warn( data: 'Hey There')
           }}
           >
               <Text style={styles.text}>Custom Order</Text>
               </Pressable>
    </View>
    );
};

export default StyleButton;