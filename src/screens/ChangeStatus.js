import React from 'react';
import {Text,View,TouchableOpacity,TouchableHighlight,TextInput,Image,ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
export default class ChangeStatus extends React.Component{
  state={
    Status:[],
    TextEntered:"",
    Message:""
  }
  componentDidMount()
  {
     firebase.database().ref('/users/workspaces/status/bucket_1').on('value',snapshot=>{

var temp;
temp=snapshot.val().statuses;
this.setState({
Status:temp

})
})
  }
change=()=>
{
this.state.Status.splice(parseInt(this.state.TextEntered)-1,1,'green')

firebase.database().ref('/users/workspaces/status/bucket_1').update({statuses:this.state.Status})
      this.setState({Message:"Saved Changes!!!"})
}

  render()
  {
return(
  <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
  <Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:80,width:100,alignSelf:"center",marginTop:20}}/>
  <Text></Text>
<TextInput placeholder="Enter the workstation number" onChangeText={(e)=>{this.setState({TextEntered:e})}}></TextInput>
<Text style={{color:"red",alignSelf:"center"}}>{this.state.Message}</Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.change}>Submit</Text>
<Text onPress={()=>{Actions.main()}} style={{color:"#274DF6",alignSelf:"center",fontSize:20}}>Logout</Text>
</View>
</ImageBackground>
)

  }
}