import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "../Screens/StyleApp";
import Chart from "../Screens/Chart";
import Buy from "../Screens/Buy";
import Notify from "../Screens/Notify";
import PriceList from "../Screens/Price_List";
import ScreenAssets from "./ScreenAssets";
import { SafeAreaView } from "react-native-safe-area-context";

import {useTranslation} from 'react-i18next';
import './Language/I18n_language';


const Tab = createBottomTabNavigator();

function Header_Buy(props) {

  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.Home_Header_App}>
      <View
        style={{ flexDirection: "row", marginStart: 10, alignItems: "center" }}
      >
        <Image
          source={require("../Screens/Img/user.png")}
          style={styles.Home_imageUser}
        />
        <Text style={{ marginLeft: 10 }}>Tai khoan</Text>
      </View>

      <View style={{ marginTop: 4 }}>
        <TouchableOpacity>
          <Text style={styles.Home_otp}>Xác thực OTP</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={{ margin: 14, alignItems: "flex-end" }}
      >
        <Image
          source={require("../Screens/Img/Menu.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Header_Assets(props) {
  const [open, setopen] = useState(false);
  const [value, setvalue] = useState(null);
  const [items, setitems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [SelectedValue, setSelecttedvalue] = useState("java");
  return (
    <SafeAreaView style={styles.Home_Header_App}>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setopen}
          setValue={setvalue}
          setItems={setitems}
          style={styles.Home_dropdown}
        />
      </View>

      <View style={{ marginTop: 4 }}>
        <TextInput style={styles.Home_Header_from} />
        <Image
          source={require("../Screens/Img/timkiem.png")}
          style={styles.Home_image_TimKiem}
        />
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.openDrawer()}
        style={{ margin: 14, alignItems: "flex-end" }}
      >
        <Image
          source={require("../Screens/Img/Menu.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function Home(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Asserts") {
            iconName = focused
              ? require("/reactnative/APP_APG/assets/assetsimg.png")
              : require("./Img/taisan.png");
          } else if (route.name === "Chart") {
            iconName = focused
              ? require("/reactnative/APP_APG/assets/Chart.png")
              : require("./Img/banggia.png");
          } else if (route.name === "Buy") {
            iconName = focused
              ? require("/reactnative/APP_APG/assets/Buy.png")
              : require("./Img/muaban.png");
          } else if (route.name === "PriceList") {
            iconName = focused
              ? require("/reactnative/APP_APG/assets/Note.png")
              : require("./Img/so.png");
          } else if (route.name === "Notify") {
            iconName = focused
              ? require("/reactnative/APP_APG/assets/notify.png")
              : require("./Img/Thongbao.png");
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
    >
      <Tab.Screen
        name="Asserts"
        component={ScreenAssets}
        options={{
          tabBarShowLabel: false,
          title: "Tài khoản",
          header: (props) => <Header_Assets {...props} />,
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarShowLabel: false,
          title: "Bảng giá",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Buy"
        component={Buy}
        initialParams={{ Check_pramas: 0 }}
        options={{
          tabBarShowLabel: false,
          title: "Mua bán",
          header: (props) => <Header_Buy {...props} />,
        }}
      />
      <Tab.Screen
        name="PriceList"
        component={PriceList}
        options={{
          title: "Danh giao dịch",
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notify"
        component={Notify}
        options={{
          title: "Thông báo",
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
