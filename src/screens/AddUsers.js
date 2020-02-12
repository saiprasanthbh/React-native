import React from 'react';
import {Text,View,StyleSheet,TextInput,Button,Linking,ActivityIndicator,Image,ImageBackground} from 'react-native';
import {Card,Picker} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
export default class AddUsers extends React.Component{

state={
email:"",
password:"",
Message:""
}

authenticate=()=>
{
firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(this.setState({Message:"New User Created",email:"",password:""})).catch((error)=>{console.log(error)})

}

render()
{
return(
    <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
<Card containerStyle={{borderRadius:15}}>
  <Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:80,width:100,alignSelf:"center",marginTop:20}}/>
  <Text></Text>
<Text style={{marginLeft:270,color:"#274DF6"}} onPress={()=>{Actions.main()}}>Home</Text>

<Text style={{alignSelf:"center"}}>Hello Admin !!!! Welcome!!!!!!!!</Text>

<View style={{flexDirection:"row"}}>
<Text style={{flex:1,marginTop:20}}>Email *:</Text>
<TextInput value={this.state.email} style={{flex:2,marginTop:20}} placeholder="Enter a valid Email Address" onChangeText={(e)=>{this.setState({email:e,Message:""})}}></TextInput>
</View>

<View style={{flexDirection:"row"}}>
<Text style={{flex:1,marginTop:20}}>Password*:</Text>
<TextInput value={this.state.password} style={{flex:2,marginTop:20}} secureTextEntry={true} placeholder="Enter a valid Password"  onChangeText={(e)=>{this.setState({password:e,Message:""})}}></TextInput>
</View>

<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.authenticate}>Add User</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.main()}}>Logout</Text>
<Text style={{color:"red",alignSelf:"center"}}>{this.state.Message}</Text>
</Card>
</View>
</ImageBackground>
)

}
}