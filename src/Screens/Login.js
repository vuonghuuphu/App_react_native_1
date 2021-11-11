import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog,Button,Portal,Provider} from "react-native-paper";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from '../Screens/StyleApp';
const background = require("/reactnative/APP_APG/assets/Backgroudlogin.png");
const Logo = require("/reactnative/APP_APG/assets/APGlogowhite.png");
const Hand_Valve = require("/reactnative/APP_APG/assets/Vantay.png");
import {useTranslation} from 'react-i18next';
import './Language/I18n_language';

var LocalAuthentication = require('expo-local-authentication')

export default function Login (props){

  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log("fall back to password authentication");
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable)
      return alertComponent(
        "Please enter your password",
        "Biometric Authentication not supported",
        "OK",
        () => fallBackToDefaultAuth()
      );
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        "Đăng nhập bằng vân tay",
        "Please login with your password",
        "OK",
        () => fallBackToDefaultAuth()
      );
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Đăng nhập bằng vân tay",
      cancelLabel: "Thoát",
      disableDeviceFallback: true,
    });
    if (biometricAuth){
      props.navigation.navigate('Home')
    };
  };




  const [visible, setVisible] = React.useState(false);

  const {t, i18n} = useTranslation();
  
  const [setLanguage] =useState('vi');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
      setVisible(false)
  };

  

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);


  return (
    <Provider>
      <View>
        <View>
        <View>
          <ImageBackground source={background} style={styles.Login_Background_login}>
            <SafeAreaView style={{alignItems:'flex-end',marginRight:20,marginTop:10}}>

            <TouchableOpacity onPress={showDialog}>
            <Image source={require('../Screens/Img/united.png')} />
            </TouchableOpacity>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>{t('select_language')}</Dialog.Title>
            <Dialog.Content>

              <TouchableOpacity 
                onPress={() => changeLanguage('vi')}
                style={styles.Login_item_language}
                >
                  <Image source={require('../Screens/Img/united.png')} style={{width:30,height:30,marginEnd:10}}/>
                  <Text style={styles.txt_language}>{t('Vie')}</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => changeLanguage('en')}
                style={styles.Login_item_language}
                >
                  <Image source={require('../Screens/Img/united.png')} style={{width:30,height:30,marginEnd:10}}/>
                  <Text style={styles.txt_language}>{t('En')}</Text>
              </TouchableOpacity>

            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Thoát</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> 
            </SafeAreaView>
            <View style={styles.Login_Logo}>
              <Image source={Logo} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.Login_From}>
          <TextInput 
          style={styles.Login_InputFrom} 
          placeholder={t('txt_input_acount')} />
          <TextInput
            style={styles.Login_InputFrom}
            placeholder={t('txt_input_pwd')}
            secureTextEntry={true}
            autoFocus={true}
          />
        </View>

        <View style={styles.Login_From_btn_login}>
          <TouchableOpacity style={styles.Login_btn_login}
         onPress={()=> props.navigation.navigate('Home') } >
            <Text style={styles.Login_TextBtnlogin}>{t('txt_Login')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBiometricAuth} >
          <Image
          style = {styles.Login_Handvalve}
          source={Hand_Valve}
          />
          </TouchableOpacity>
        </View>

        <View style={styles.Login_Help}>
          <TouchableOpacity>
            <Text>{t('txt_remenber_pwd')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{t('txt_forgot_pwd')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Login_Form_Signup}>
        <View style={styles.Login_signUp}>
          <Text >{t('txt_notaccount')}</Text>
          <Text style={styles.Login_txt_signup}>{t('txt_register')}</Text>
        </View>
        </View>
        </View>
        </View>
        </Provider>
    );
}

function DialogLanguage() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

      return(
        <View>
          <Dialog visible={showDialog} onDismiss={hideDialog}>
            <Dialog.Title>Select language</Dialog.Title>
              <Dialog.Content>
                  <View >

                    <Button style={styles.Login_item_language} onPress>
                    <Image source={require('../Screens/Img/united.png')} />
                    <Text>Tiếng việt</Text>
                    </Button>

                    <Button style={styles.Login_item_language}>
                    <Image source={require('../Screens/Img/united.png')} />
                    <Text>Tiếng Anh</Text>
                    </Button>

                  </View>
              </Dialog.Content>
          </Dialog>
        </View>
      );
}



