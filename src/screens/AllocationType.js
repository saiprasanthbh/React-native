import React from 'react';
import {Actions} from 'react-native-router-flux';
import {View,Text,FlatList,TouchableOpacity,TouchableHighlight,Image,ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';
import firebase from 'firebase';
export default class AllocationType extends React.Component{
  state={
TypesOfAllocation:[" WorkSpace "," ConferenceRoom "],
DatesIn:[],
Dates:[],
HoursIn:[],
MinutesIn:[],
IndexOfrequestedwst:[]
  }
componentDidMount()
{
firebase
      .database()
      .ref('/users')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().conferencestatus) {
          temp = snapshot.val().conferencestatus;
          this.setState({
            ConferenceStatus: temp,
          });
        }
      });

        firebase
      .database()
      .ref('/users/admin/conference/conferenceOut')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confDate) {
          temp = snapshot.val().confDate;
          this.setState({
            Dates: temp,
          });
        }
      });

      firebase
      .database()
      .ref('/users/admin/conference/conferenceIn')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confDate) {
          temp = snapshot.val().confDate;
          this.setState({
            DatesIn: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceIn')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confHour) {
          temp = snapshot.val().confHour;
          this.setState({
            HoursIn: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceIn')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confMin) {
          temp = snapshot.val().confMin;
          this.setState({
            MinutesIn: temp,
          });
        }
      });


firebase
      .database()
      .ref('/users/admin/conference/conferenceOut')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().indexes) {
          temp = snapshot.val().indexes;
          this.setState({
            IndexOfrequestedwst: temp,
          });
        }
      });

  
}
AllocateConference=()=>
{

  firebase.database().ref('/users/admin/countforworkspace').update({count:0})
  
if(this.state.DatesIn.length>this.state.Dates.length) {
var temp=this.state.DatesIn.length-this.state.Dates.length
this.state.DatesIn.splice(this.state.DatesIn.length-temp,1);
this.state.HoursIn.splice(this.state.HoursIn.length-temp,1);
this.state.MinutesIn.splice(this.state.MinutesIn.length-temp,1);
this.state.IndexOfrequestedwst.splice(this.state.IndexOfrequestedwst.length-temp,1);
var index=this.state.IndexOfrequestedwst.length-temp;
  this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[index],
                  1,
                  'green'
                );
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this.state.ConferenceStatus });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceIn').update({confDate:this.state.DatesIn})

    firebase
      .database()
      .ref('/users/admin/conference/conferenceIn').update({confHour:this.state.HoursIn})

             firebase
      .database()
      .ref('/users/admin/conference/conferenceIn').update({confMin:this.state.MinutesIn})
firebase
      .database()
      .ref('/users/admin/conference/conferenceOut').update({indexes:this.state.IndexOfrequestedwst})
             }      

              if(this.state.IndexOfrequestedwst.length>this.state.DatesIn.length)
             {
var temp1=this.state.IndexOfrequestedwst.length-this.state.DatesIn.length;
var index1=this.state.IndexOfrequestedwst.length-temp1
this.state.IndexOfrequestedwst.splice(index1,1)
  this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[index1],
                  1,
                  'green'
                );
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this.state.ConferenceStatus });



firebase
      .database()
      .ref('/users/admin/conference/conferenceOut').update({indexes:this.state.IndexOfrequestedwst})


             } 
    Actions.start()
}

render()
{
return(
  <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
<Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:250,width:300,alignSelf:"center",marginTop:20}}/>
<Text></Text>
<Text style={{alignSelf:"center",color:"#581845"}}>Welcome to Freez -a space allocation App</Text>
<Text></Text>
<TouchableOpacity onPress={()=>{Actions.start(),firebase.database().ref('/users/admin/countforworkspace').update({count:1})}}><Text style={{borderStyle:"solid",borderColor:"#274DF6",borderWidth:3,alignSelf:"center",borderRadius:8}}> WorkSpace </Text></TouchableOpacity>
<Text></Text>
<TouchableOpacity onPress={this.AllocateConference}><Text style={{borderStyle:"solid",borderColor:"#274DF6",borderWidth:3,alignSelf:"center",borderRadius:8}}> Conference-Room </Text></TouchableOpacity>

</View>
</ImageBackground>
)



}



} 