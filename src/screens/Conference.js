import React from 'react';
import {View,Text,FlatList,TouchableOpacity,TouchableHighlight,ImageBackground} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export default class Conference extends React.Component
{
  state={
Conferencelist:[],
ConferenceStatus:[],
requestedWst:"",
countforRequest:0,
Message:"",
ConferenceroomDetails:[],
Selectedconfroomdetails:"",
Dates:[],
Hours:[],
Minutes:[],
Zones:[],
IndexOfrequestedwst:[],
CountforMultipleSelection:0,
RequestInfo:""

  }
  componentDidMount()
  {
firebase.database().ref('/users').on('value',snapshot=>{
var temp;
if(snapshot.val().conferenceroom)
{
  temp=snapshot.val().conferenceroom
this.setState({
Conferencelist:temp

})
}

})


firebase.database().ref('/users').on('value',snapshot=>{
var temp;
if(snapshot.val().conferencestatus)
{
  temp=snapshot.val().conferencestatus
this.setState({
ConferenceStatus:temp

})
}

})


firebase.database().ref('/users').on('value',snapshot=>{
var temp;
if(snapshot.val().conferenceroomdetails)
{
  temp=snapshot.val().conferenceroomdetails
this.setState({
ConferenceroomDetails:temp

})
}

})


firebase.database().ref('/users/admin/conference/conferenceOut').on('value',snapshot=>{
var temp;
if(snapshot.val().confDate)
{
temp=snapshot.val().confDate;
this.setState({
  Dates:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceOut').on('value',snapshot=>{
var temp;
if(snapshot.val().confHour)
{
temp=snapshot.val().confHour;
this.setState({
  Hours:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceOut').on('value',snapshot=>{
var temp;
if(snapshot.val().confMin)
{
temp=snapshot.val().confMin;
this.setState({
  Minutes:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceOut').on('value',snapshot=>{
var temp;
if(snapshot.val().confZone)
{
temp=snapshot.val().confZone;
this.setState({
  Zones:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceOut').on('value',snapshot=>{
var temp;
if(snapshot.val().indexes)
{
temp=snapshot.val().indexes;
this.setState({
  IndexOfrequestedwst:temp
})
}


})

}

DisplayDetails=()=>
{

this.setState({
  Selectedconfroomdetails:this.state.ConferenceroomDetails[this.state.Conferencelist.indexOf(this.state.requestedWst)]

})



}

UpdateDetails=()=>
{
  if(this.state.countforRequest==0)
  {
  this.setState({
countforRequest:1,
Message:"",
RequestInfo:"Request-Successful"

  })
  if(this.state.ConferenceStatus[this.state.Conferencelist.indexOf(this.state.requestedWst)]=="blue")
{
this.setState(
  {
    IndexOfrequestedwst:this.state.IndexOfrequestedwst.concat(this.state.Conferencelist.indexOf(this.state.requestedWst))
  }
)

this.state.ConferenceStatus.splice(this.state.Conferencelist.indexOf(this.state.requestedWst),1,"red")
firebase.database().ref('/users').update({conferencestatus:this.state.ConferenceStatus});
}

  if(this.state.ConferenceStatus[this.state.Conferencelist.indexOf(this.state.requestedWst)]=="red")
{
this.setState(
  {
    IndexOfrequestedwst:this.state.IndexOfrequestedwst.concat(this.state.Conferencelist.indexOf(this.state.requestedWst))
  }
)

this.state.ConferenceStatus.splice(this.state.Conferencelist.indexOf(this.state.requestedWst),1,"red")
firebase.database().ref('/users').update({conferencestatus:this.state.ConferenceStatus});
}







firebase.database().ref('/users').update({conferenceroom:this.state.Conferencelist})
firebase.database().ref('/users').update({conferencestatus:this.state.ConferenceStatus})

}
}



render()
{
return(
   
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
<FlatList numColumns={1} horizontal={false} extraData={this.state} data={this.state.Conferencelist} renderItem={({item})=>{
return<TouchableOpacity><Text onPress={()=>{
if(this.state.ConferenceStatus[this.state.Conferencelist.indexOf(item)]=="green")
{
if(this.state.CountforMultipleSelection==0)
{
this.state.ConferenceStatus.splice(this.state.Conferencelist.indexOf(item),1,"blue")
firebase.database().ref('/users').update({conferencestatus:this.state.ConferenceStatus});
this.setState({requestedWst:item,CountforMultipleSelection:1})
}
else{
  this.setState({Message:"You are allowed to select only one room at a time"})
}

}

else if(this.state.ConferenceStatus[this.state.Conferencelist.indexOf(item)]=="red")
{
if(this.state.CountforMultipleSelection==0)
{
this.state.ConferenceStatus.splice(this.state.Conferencelist.indexOf(item),1,"red")
firebase.database().ref('/users').update({conferencestatus:this.state.ConferenceStatus});
this.setState({requestedWst:item,CountforMultipleSelection:1})
}
else{
  this.setState({Message:"You are allowed to select only one room at a time"})
}

}




else if(this.state.ConferenceStatus[this.state.Conferencelist.indexOf(item)]=="blue")
{

this.state.ConferenceStatus.splice(this.state.Conferencelist.indexOf(item),1,"green")
firebase.database().ref('/users').update({conferencestatus:this.state.ConferenceStatus});
this.setState({
  CountforMultipleSelection:0,
  Message:"",
  Selectedconfroomdetails:""
})
}
}} style={{borderWidth:2,borderRadius:8,borderStyle:"solid",borderColor:this.state.ConferenceStatus[this.state.Conferencelist.indexOf(item)],alignSelf:"center",color:this.state.ConferenceStatus[this.state.Conferencelist.indexOf(item)]}}>""
{item}""</Text><Text></Text><Text></Text></TouchableOpacity>
}}></FlatList>
<Text style={{alignSelf:"center"}}>{this.state.requestedWst}</Text>
<Text style={{alignSelf:"center"}}>Details::{this.state.Selectedconfroomdetails}</Text>
<Text style={{alignSelf:"center",color:"red"}}>{this.state.Message}</Text>
<Text style={{alignSelf:"center",color:"red"}}>{this.state.RequestInfo}</Text>
<TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.DisplayDetails}>Details</Text></TouchableHighlight>
<TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.UpdateDetails}>Request</Text></TouchableHighlight>
<Text></Text>
<TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{
  if(this.state.countforRequest==1)
  {
    Actions.calendar(),
    firebase.database().ref('/users/admin/conference/conferenceOut').update({indexes:this.state.IndexOfrequestedwst})
  }
  if(this.state.countforRequest==0)
  {
this.setState({
Message:"Please select your conference-Room"
})
  }
  }}>Continue</Text></TouchableHighlight>
  <Text></Text>
  <TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.main()}}>Logout</Text></TouchableHighlight>
</View>
)

}


}