import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../StyleApp";
import { PieChart } from "react-native-chart-kit";


import {useTranslation} from 'react-i18next';


const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

export default function TaiKhoan (props){
   
  const { t } = useTranslation();

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2,
      barPercentage: 0.5,
      useShadowColorFromDataset: false
    };
    return (
      
      <ScrollView>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
        <View>
          <View
            style={{ marginTop: 20, marginBottom: 20, flexDirection: "row" }}
          >
            <View>
              <PieChart
                data={data}
                width={400}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"5"}
                center={[5, 0]}
                absolute
              />
            </View>
          </View>

          <View style={styles.As_Imgborder}>
            <ImageBackground
              source={require("../Img/backgroudTaikhoan.png")}
              style={{ height: 130, width: "100%" }}
            >
              <View style={styles.As_ChungKhoan}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                 {t('txt_Stock')}
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "green" }}
                >
                  0
                </Text>
              </View>
              <Image source={require("../Img/Vector.png")} />
              <View style={styles.As_ChungKhoan}>
                <Text>{t('txt_code')}</Text>
                <Text>{t('txt_quantity')}</Text>
                <Text>{t('txt_costprice')}</Text>
                <Text>{t('txt_price')}</Text>
                <Text>{t('txt_interest_loss')}</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.As_No}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{t('txt_debt')}</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>
              0
            </Text>
          </View>

          <View style={styles.As_from_Btn}>
            <TouchableOpacity
              style={styles.As_Btn_App}
              onPress={() =>
                props.navigation.navigate("Buy", {
                  Check_pramas: 0,
                })
              }
            >
              <Text style={styles.As_Text_btn}>{t('txt_btn_Buy')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.As_btn_Sale}
              onPress={() =>
                props.navigation.navigate("Buy", {
                  Check_pramas: 1,
                })
              }
            >
              <Text style={styles.As_Text_btn_sale}>{t('txt_btn_sell')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
