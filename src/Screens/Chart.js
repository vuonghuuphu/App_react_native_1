import React from "react";
import { View ,Text,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Chart (props){
    return (
        <SafeAreaView>
           <TouchableOpacity  onPress={() => props.navigation.openDrawer()} style={{margin:10,alignItems:'flex-end'}}>
                <Image source={require('../Screens/Img/Menu.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
        </SafeAreaView>
    );  
}