import React from "react";
import { View ,Text,Image,Switch,StyleSheet} from "react-native";

const styles = StyleSheet.create({

    // Loading
    Loading_Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    Loading_BackgroundLoading:{
        height:'100%',
        width:'100%',
    },
    Loading_Logo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Loading_LogoImage:{
        width:200,
    },
    
    // Login

    Login_Handvalve:{
        width:50,
        height:50,
      },
    
    Login_Background_login: {
        height: 300,
        width: "100%",
      },
    
      Login_Logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      },
      Login_InputFrom: {
        backgroundColor:'white',
        paddingLeft:20,
        marginTop: 20,
        height: 30,
        borderRadius: 20,
        borderColor: "black",
        width: 350,
        height: 45,
      },
      Login_Help: {
        marginTop:20,
        marginLeft:25,
        marginRight:25,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      Login_From: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
      },
      Login_btn_login: {
        alignItems: "center",
        justifyContent: "center",
        marginStart: 15,
        width: 270,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#e39b17",
      },
      Login_From_btn_login:{
        flexDirection:'row',
        justifyContent:'space-around'
      },
      Login_TextBtnlogin: {
        fontSize: 18,
        color: "white",
      },
      Login_signUp: {
        padding:5,
        alignItems:"center",
        flexDirection:"row",
      },
      Login_Form_Signup:{
        marginTop:"58%",
        alignItems:"center"
      },
      Login_txt_signup:{
        color:"#e39b17",
        marginLeft:5,
        fontWeight:"bold"
      },
      Login_item_language:{
        flexDirection:'row',
        margin:10,
      },
      txt_language:{
        fontSize:20,
      },



    //   Home
    Home_Header_App:{
        justifyContent:'space-between',
        flexDirection: 'row',
        marginBottom:5
      },
      Home_Header_from:{
        backgroundColor:'white',
        borderRadius:25,
        height: 40,
        width:160,
        paddingLeft:10,
      },
      Home_image_TimKiem:{
        width:25,
        height:25,
        position:'absolute',
        marginLeft:125,
        marginTop:5,
      },
      Home_Picker_App:{
        width: 160,
      },
      Home_imageUser:{
        width:20,
        height:20,
      },
      Home_otp:{
        color:'white',
        paddingTop:9,
        paddingBottom:9,
        paddingStart:30,
        paddingEnd:30,
        borderRadius:20,
        backgroundColor:'#F89A2B',
        alignItems:'center',
        justifyContent:'center'
      },

      Home_dropdown:{
        borderRadius:20,
        width:180,
        height:40,
        marginTop:5,
        marginLeft:5,
        borderWidth:0
      },

      //Buy

    Buy_Headers_body:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    Buy_bodytitle:{
        flexDirection:"row",
        justifyContent:'space-around'
    },
    Buy_Title:{
        alignItems:"center",
        backgroundColor:'#00D054',
        flexDirection:'row',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        height:40,
        width:100,
    },
    Buy_Title1:{
      alignItems:"center",
      backgroundColor:'red',
      flexDirection:'row',
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      height:40,
      width:100,
  },
    Buy_text_togglebtn: {
        marginRight:10,
        paddingLeft:5,
        justifyContent:'space-between',
        alignItems:"center",
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:25,
        height:40,
        width:160, 
    },

    Buy_FromBuy:{
        paddingLeft:10,
        marginLeft:10,
        justifyContent:'space-between',
        alignItems:"center",
        backgroundColor:'#EEEEEE',
        flexDirection:'row',
        borderRadius:25,
        borderRadius:25,
        height:40,
        width:'95%'
    },

    Buy_FromBuy1:{
        alignItems:'center',
        marginTop:10,
        justifyContent:'space-around',
        alignItems:"center",
        backgroundColor:'#EEEEEE',
        flexDirection:'row',
        borderRadius:25,
        borderRadius:25,
        height:40,
        width:120,
    },

    Buy_FromBuy1_Dis:{
      alignItems:"center",
      backgroundColor:'grey',
      flexDirection:'row',
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      height:40,
      width:100,
  },

  Buy_Title_dis:{
    alignItems:"center",
    backgroundColor:'grey',
    flexDirection:'row',
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    height:40,
    width:100,
},

Buy_btn_Sale:{
  backgroundColor:'red',
        borderRadius:25,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:25,
        paddingLeft:25
},

    Buy_FromBuy2:{
        alignItems:'center',
        marginTop:10,
        justifyContent:'space-around',
        alignItems:"center",
        backgroundColor:'#EEEEEE',
        flexDirection:'row',
        borderRadius:25,
        borderRadius:25,
        height:40,
        width:180,
    },
    Buy_btn_oder:{
        backgroundColor:'#00D054',
        borderRadius:25,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:25,
        paddingLeft:25
    },
    Buy_btn_titleBuy:{
      borderBottomLeftRadius:25,
      borderTopLeftRadius:25,
      height:40,
    },

    // Tai khoan
    
    As_Btn_App:{
        borderRadius:100,
        backgroundColor:'#00D152',
    },
    As_from_Btn:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'flex-end'
    },
    As_Text_btn:{ 
        paddingTop:20,
        paddingBottom:20,
        paddingStart:17,
        paddingEnd:17,
        color:'white',
    },
    As_Text_btn_sale:{
        paddingTop:20,
        paddingBottom:20,
        paddingStart:17,
        paddingEnd:17,
        color:'white'
    },
    As_btn_Sale:{
        marginRight:10,
        marginLeft:10,
        borderRadius:100,
        backgroundColor:'red',
    },
    As_Imgborder:{
        alignItems:'center',
    },
    As_ChungKhoan:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    As_No:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'white',
        borderRadius:25,
        paddingTop:15,
        paddingBottom:15,
        paddingStart:10,
    },
    As_chart:{
      flexDirection:'row',
      marginTop:10
    },
    As_text_chart:{
      
    },
});
export default styles;