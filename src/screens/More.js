import React from 'react';
import {Text,View,ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class More extends React.Component
{
render()
{
return(
  <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.addusers()}}>Add User</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.changestatus()}}>Change Status</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.changepassword()}}>Change Password</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.main()}}>Logout</Text>
</View>
</ImageBackground>
)


}


}