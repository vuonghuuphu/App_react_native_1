import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,} from "@react-navigation/drawer";
import React from "react";
import Help from "./Menuscreen/Help";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Home";
import {useTranslation} from 'react-i18next';


const Drawer = createDrawerNavigator();

function DrawerContent(props) {

  const { t } = useTranslation();

    return (
      <SafeAreaView style={{ flex: 1,backgroundColor:'#F37022'}}>
        <View style={{marginTop:40,}}>
        <TouchableOpacity onPress={()=> props.navigation.navigate('screen2') }><Text style={styles.TextmenuAccount}>Tài khoản</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.TextMenu}>Tài khoản</Text></TouchableOpacity>
        <Text style={styles.TextMenu} >NA 01</Text>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Help') }><Text style={styles.TextMenu}>{t('Help')}</Text></TouchableOpacity>
        <Text style={styles.TextMenu}>Ứng dụng</Text>
        </View>
    </SafeAreaView>
      
    );
  }


export default function MenuApp ( ){
    return(
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}  
        screenOptions
        >
            <Drawer.Screen name="screen" component={Home} 
            options={{ title:'', headerShown:false}}
            />
      
            <Drawer.Screen name="Help" component={Help} 
            options={{ title:'', headerShown:false}}
            />

            <Drawer.Screen name="screen2" component={Home} 
            options={{ title:'', headerShown:false}}
            />
            
        </Drawer.Navigator>
        
    );
}
const styles = StyleSheet.create({
 TextMenu:{
   color:'white',
   marginStart:20,
   fontSize:16,
   paddingTop:20,
 },
 TextmenuAccount:{
   display:'none',
   color:"#F37022",
  marginEnd:30,
  paddingStart:20,
  fontSize:17,
  padding:8,
  borderBottomRightRadius:5,
  borderTopRightRadius:5,
  backgroundColor:'white'
 },

});