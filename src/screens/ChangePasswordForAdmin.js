import React from 'react';
import {View,Text,TextInput,Image,ImageBackground} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export default class ChangePasswordForAdmin extends React.Component{
  state={
    Email:"",
    Password:""
  }
  submit=()=>
  {
firebase.database().ref('/users/admin').update({email:this.state.Email})
firebase.database().ref('/users/admin').update({password:this.state.Password})
  }
render()
{
return(
   <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
  <Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:80,width:100,alignSelf:"center",marginTop:20}}/>
  <Text></Text>
<View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, marginTop: 20 }}>Email *:</Text>
            <TextInput
              style={{ flex: 2, marginTop: 20 }}
              placeholder="Enter a New Email Address"
              onChangeText={e => {
                this.setState({ Email: e});
              }}
            />
          </View>
<View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, marginTop: 20 }}>Password *:</Text>
            <TextInput
              style={{ flex: 2, marginTop: 20 }}
              placeholder="Enter a New Password"
              onChangeText={e => {
                this.setState({Password: e});
              }}
            />
          </View>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.submit}>Submit</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.main()}}>Logout</Text>
</View>
</ImageBackground>
)

}


}