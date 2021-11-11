import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useState } from "react";
import { Component } from "react";
import { View, Text, Image, Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Row, Rows, Table } from "react-native-table-component";
import styles from "../Screens/StyleApp";
const Menuleft = createDrawerNavigator;

import {useTranslation} from 'react-i18next';


export default function Buy (props,state){

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isenabled, setIsenabled] = useState(false);
  const toggleSwitch_con = () => setIsenabled(previousState => !previousState);

    state = {
      tableHead: ["Kl mua", "Giá mua", "Giá bán", "kl Bán"],
      tableData: [
        ["1", "2", "3", "4"],
        ["1", "2", "3", "4"],
      ],
      toggle: false,
      toggle1: false,
    };
    const { Check_pramas } = props.route.params;
    const { t } = useTranslation();
    return (
      <View>
        <View style={styles.Buy_Headers_body}>
          
                {(Check_pramas === 0) && 
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Buy',{
                  Check_pramas : 0 })}>
                
                <View style={styles.Buy_Title}>
                    <Text style={{ paddingLeft: 35 ,color:'white'}}>{t('txt_btn_Buy')}</Text>
                </View>  
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> props.navigation.navigate('Buy',{
                  Check_pramas : 1 })}>
                <View style={styles.Buy_FromBuy1_Dis}>
                    <Text style={{ paddingLeft: 35 }}>{t('txt_btn_sell')}</Text>
                </View>
                </TouchableOpacity>

            </View>
                }

                {(Check_pramas === 1) && 
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Buy',{
                  Check_pramas : 0 })}>
                <View style={styles.Buy_Title_dis}>
                    <Text style={{ paddingLeft: 35 }}>{t('txt_btn_Buy')}</Text>
                </View>  
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> props.navigation.navigate('Buy',{
                  Check_pramas : 1 })}>
                <View style={styles.Buy_Title1}>
                    <Text style={{ paddingLeft: 35,color:'white'}}>{t('txt_btn_sell')}</Text>
                </View>
                </TouchableOpacity>
                
            </View>
                }
          
          <View style={styles.Buy_text_togglebtn}>
            <Text>{t('txt_condition')}</Text>
            <Switch
              trackColor={{ false: "grey", true: "#F89A2B" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
           />
          </View>
        </View>
        <View
          style={{ marginTop: 10, backgroundColor: "white", paddingBottom: 20 }}
        >
          <View style={{ marginTop: 10, paddingTop: 10 }}>
            <View style={styles.Buy_bodytitle}>
              <Text>{t('txt_code')}:{Check_pramas}</Text>
              <View style={styles.Buy_bodytitle}>
                <Text>{t("txt_purchasing_ability")}</Text>
                <Text
                  style={{ paddingLeft: 5, color: "green", fontWeight: "bold" }}
                >
                  01929387
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={styles.Buy_FromBuy}>
              <Text>APG</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.Buy_FromBuy1}>
              <Text>Trần</Text>
              <Text style={{ color: "#C000D1" }}>1222</Text>
            </View>

            <View style={styles.Buy_FromBuy1}>
              <Text>Sàn</Text>
              <Text style={{ color: "#00DFD2" }}>1222</Text>
            </View>

            <View style={styles.Buy_FromBuy1}>
              <Text>TC</Text>
              <Text style={{ color: "#D1A300" }}>1222</Text>
            </View>
          </View>

          <View style={styles.Buy_bodytitle}>
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text>{t("txt_quantity")}</Text>
              <View style={styles.Buy_FromBuy2}>
                <Text style={{ color: "black" }}>TC</Text>
                <Text style={{ color: "#D1A300" }}>1222</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={{ marginStart: 10 }}>{t('txt_price')}</Text>
              <View style={styles.Buy_FromBuy2}>
                <Text style={{ color: "black" }}>TC</Text>
                <Text style={{ color: "#D1A300" }}>1222</Text>
              </View>
            </View>
          </View>

          <Image
            style={{ marginTop: 30, marginBottom: 20 }}
            source={require("../Screens/Img/Vector.png")}
          />

          <View style={styles.Buy_bodytitle}>
            <Text style={{ marginEnd: 100 }}>{t('txt_totalprice')}</Text>
            <Text style={{ color: "green", fontWeight: "bold" }}>12222222</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Switch
              trackColor={{ false: "grey", true: "#F89A2B" }}
              thumbColor={isenabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch_con}
              value={isenabled}
            />
            <Text style={{ marginTop: 13 }}>{t('txt_confirmation')}</Text>
          </View>

          {(Check_pramas === 0) && 
          <TouchableOpacity style={styles.Buy_btn_oder}>
            <Text style={{color:'white'}}>{t('txt_btn_Buy')}</Text>
          </TouchableOpacity>
        }

            {(Check_pramas === 1) && 
          <TouchableOpacity style={styles.Buy_btn_Sale}>
            <Text style={{color:'white'}} >{t('txt_btn_sell')}</Text>
          </TouchableOpacity>
        }

        </View>

        <View style={{ margin: 10 }}>
          <Table
            borderStyle={{ borderBottomWidth: 1, borderColor: "black" }}
          >
            <Row data={state.tableHead}/>
            <Rows
              data={state.tableData}
              style={{ backgroundColor: "white", height: 50, marginBottom: 10 }}
            />
          </Table>
        </View>
      </View>
    );
  }
