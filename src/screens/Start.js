import React from 'react';
import {View,Text,Button,Image,ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class Start extends React.Component
{
render()
{
return(
  <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
  <Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:80,width:100,alignSelf:"center",marginTop:20}}/>
  <Text></Text>
<Text  style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.login()}}>Employee</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.adminlogin()}}>Admin</Text>

</View>
</ImageBackground>
)
}

}