import React from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { Image, Text ,View} from "react-native";
import TaiKhoan from "./ScreenAssets/Taikhoan";
import ChungKhoan from "./ScreenAssets/Chungkhoan";
import TienMat from "./ScreenAssets/TienMat";

import {useTranslation} from 'react-i18next';

const TopTab = createMaterialTopTabNavigator();



export default function ScreenAssets (props){
    const { t } = useTranslation();
    return(
        <TopTab.Navigator 
        >
            <TopTab.Screen name="Taisan" component={TaiKhoan}
            options={{
                title: t('txt_assets')
            }}
            />
            <TopTab.Screen name="ChungKhoan" component={ChungKhoan}
            options={{
                title:t('txt_Stock')
            }}
            />
            <TopTab.Screen name="TienMat" component={TienMat}
            options={{
                title:t('txt_cash')
            }}
            />
            
        </TopTab.Navigator>
    );
}