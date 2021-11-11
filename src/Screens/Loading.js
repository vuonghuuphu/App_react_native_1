import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View ,Image, Animated} from 'react-native';
import styles from "../Screens/StyleApp"

const background = require('/reactnative/APP_APG/assets/APGloading.png');
const Logo = require('/reactnative/APP_APG/assets/APGlogowhite.png');
 
export default class Loading extends React.Component{
    render(){
        return(
            <View>
        <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.Loading_BackgroundLoading}
        >
        <View style={styles.Loading_Logo}>
           <Image
           source={Logo}
           ></Image>
        </View>
        </ImageBackground>
        </View>
        );
    }
}

 
