import React from 'react';
import {View,Text,Picker,Button,TouchableOpacity,TouchableHighlight,Image,ImageBackground} from 'react-native';
import DatePicker from 'react-native-datepicker';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export default class Calendar extends React.Component{
state={
Dates:[],
Hours:[],
Minutes:[],
Date:"",
Hour:"12",
Minute:"00",
Message:"",
CountForSet:0,
Info:"",
CountforBlockingtheslot:0
}
componentDidMount()
{
firebase.database().ref('/users/admin/conference/conferenceIn').on('value',snapshot=>{
var temp;
if(snapshot.val().confDate)
{
temp=snapshot.val().confDate;
this.setState({
  Dates:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceIn').on('value',snapshot=>{
var temp;
if(snapshot.val().confHour)
{
temp=snapshot.val().confHour;
this.setState({
  Hours:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceIn').on('value',snapshot=>{
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
if(snapshot.val().confDate)
{
temp=snapshot.val().confDate;
this.setState({
  DatesOut:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceOut').on('value',snapshot=>{
var temp;
if(snapshot.val().confHour)
{
temp=snapshot.val().confHour;
this.setState({
  HoursOut:temp
})
}


})



firebase.database().ref('/users/admin/conference/conferenceOut').on('value',snapshot=>{
var temp;
if(snapshot.val().confMin)
{
temp=snapshot.val().confMin;
this.setState({
  MinutesOut:temp
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
saveDetails=()=>
{
  if(this.state.CountForSet==0)
  {
if(this.state.IndexOfrequestedwst.length==1)
{
     if(this.state.Date!="")
  {
    if(this.state.Message=="")
    {
    this.setState({Info:"Date is set Succesfully",CountforBlockingtheslot:1})
    this.setState({CountForSet:1})
this.setState({Dates:this.state.Dates.concat(this.state.Date)})
this.setState({Hours:this.state.Hours.concat(this.state.Hour)})
this.setState({Minutes:this.state.Minutes.concat(this.state.Minute)})
  }
    
  }
    }


for(var i=0;i<=this.state.Dates.length;i++)
    {
   
    var requested
    if(this.state.IndexOfrequestedwst.length>this.state.Dates.length)
    {
      requested=this.state.IndexOfrequestedwst[this.state.IndexOfrequestedwst.length-(this.state.IndexOfrequestedwst.length-this.state.Dates.length)]
    }
    if(this.state.IndexOfrequestedwst[i]==requested)
    {
if(this.state.Date==this.state.Dates[i])
{
if(parseInt(this.state.Hours[i])==parseInt(this.state.HoursOut[i]))
{
  if(this.state.Hour==this.state.Hours[i])
  {
  if(parseInt(this.state.Minute)>=parseInt(this.state.Minutes[i]) && parseInt(this.state.Minute)<=parseInt(this.state.MinutesOut[i]))
  {
this.setState(
  {
    Message:"This Slot is already booked!!!"
    
  }
)
this.setState(
  {
   CountforBlockingtheslot :1
  }
)
//console.log("This Slot is already booked!!!--1")
break;
  }
  else{
       if(this.state.Date!="")
  {
    
    if(this.state.Message=="")
    {
    this.setState({Info:"Date is set Succesfully",CountforBlockingtheslot:1})
    this.setState({CountForSet:1})
this.setState({Dates:this.state.Dates.concat(this.state.Date)})
this.setState({Hours:this.state.Hours.concat(this.state.Hour)})
this.setState({Minutes:this.state.Minutes.concat(this.state.Minute)})
  }
    
  }

  }
}
}
if(parseInt(this.state.Hours[i])!=parseInt(this.state.HoursOut[i]))
{
 if(parseInt(this.state.Hour)==parseInt(this.state.Hours[i]))
 {
   if(parseInt(this.state.Minute)>=parseInt(this.state.Minutes[i]))
   {
this.setState(
  {
    Message:"This Slot is already booked!!!"
  }
)
this.setState(
  {
   CountforBlockingtheslot :1
  }
)
//console.log("This Slot is already booked!!!--2")
break;
   }
   else{
   if(this.state.Date!="")
  {
    
    if(this.state.Message=="")
    {
    this.setState({Info:"Date is set Succesfully",CountforBlockingtheslot:1})
    this.setState({CountForSet:1})
this.setState({Dates:this.state.Dates.concat(this.state.Date)})
this.setState({Hours:this.state.Hours.concat(this.state.Hour)})
this.setState({Minutes:this.state.Minutes.concat(this.state.Minute)})
  }
    
  }
   }
 }

if(parseInt(this.state.Hour)==parseInt(this.state.HoursOut[i]))
 {
   if(parseInt(this.state.Minute)<=parseInt(this.state.MinutesOut[i]))
   {
this.setState(
  {
    Message:"This Slot is already booked!!!"
  }
)
this.setState(
  {
   CountforBlockingtheslot :1
  }
)
//console.log("This Slot is already booked!!!--3")
break;
   }
   else{
        if(this.state.Date!="")
  {
 
    if(this.state.Message=="")
    {
    this.setState({Info:"Date is set Succesfully",CountforBlockingtheslot:1})
    this.setState({CountForSet:1})
this.setState({Dates:this.state.Dates.concat(this.state.Date)})
this.setState({Hours:this.state.Hours.concat(this.state.Hour)})
this.setState({Minutes:this.state.Minutes.concat(this.state.Minute)})
  }
    
  }

   }
 }

if(parseInt(this.state.Hour)<parseInt(this.state.HoursOut[i])&&parseInt(this.state.Hour)>parseInt(this.state.Hours[i]))
{
  this.setState(
  {
    Message:"This Slot is already booked!!!"

  }
)
this.setState(
  {
   CountforBlockingtheslot :1
  }
)
//console.log("This Slot is already booked!!!--new")
break;
}

}

  }

    }


  }

this.setState({
  CountforBlockingtheslot:1
})



  if(this.state.IndexOfrequestedwst.length==0)
  {
    
    if(this.state.Date!="")
    {
    if(this.state.Message=="")
    {
    this.setState({Info:"Date is set Succesfully",CountforBlockingtheslot:0})
    this.setState({CountForSet:1})
this.setState({Dates:this.state.Dates.concat(this.state.Date)})
this.setState({Hours:this.state.Hours.concat(this.state.Hour)})
this.setState({Minutes:this.state.Minutes.concat(this.state.Minute)})
  }
    }
  
  }
  if(this.state.Date=="")
  {
this.setState({
  Message:"Please select Date"
})
  }

  if(this.state.Message=="")
  {

  if(this.state.Date!="" && this.state.CountforBlockingtheslot==0)
  {
    
    
    this.setState({Info:"Date is set Succesfully"})
    this.setState({CountForSet:1})
this.setState({Dates:this.state.Dates.concat(this.state.Date)})
this.setState({Hours:this.state.Hours.concat(this.state.Hour)})
this.setState({Minutes:this.state.Minutes.concat(this.state.Minute)})
  }
    
  }


  
}
}
update=()=>
{
    if(this.state.Message=="")
  {

firebase.database().ref('/users/admin/conference/conferenceIn').update({confDate:this.state.Dates})
firebase.database().ref('/users/admin/conference/conferenceIn').update({confHour:this.state.Hours})
firebase.database().ref('/users/admin/conference/conferenceIn').update({confMin:this.state.Minutes})
Actions.calendarout();
  }
}

render()
{
return(
  <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
  <Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:80,width:100,alignSelf:"center",marginTop:20}}/>

<Text></Text>
<Text></Text>
<Text></Text>
<Text></Text>
<Text style={{alignSelf:"center",color:"red",fontSize:20}}>-----Check-In------</Text>
<View style={{flexDirection:"row",alignItems:"center"}}>
<DatePicker cancelBtnText="Cancel" confirmBtnText="Confirm" onDateChange={(date)=>{

  this.setState({Date:date,Message:"",CountForSet:0,Info:""})
     if(this.state.CountForSet==1)
  {
this.state.Dates.splice(this.state.Dates.length-1,1)
    this.state.Hours.splice(this.state.Hours.length-1,1)
    this.state.Minutes.splice(this.state.Minutes.length-1,1)
  }
  }

  
  }></DatePicker>
<Picker style={{width:80}}selectedValue={this.state.Hour} onValueChange={(value)=>{
  
  this.setState({Hour:value,Message:"",CountForSet:0,Info:""})

  if(this.state.CountForSet==1)
  {
this.state.Dates.splice(this.state.Dates.length-1,1)
    this.state.Hours.splice(this.state.Hours.length-1,1)
    this.state.Minutes.splice(this.state.Minutes.length-1,1)
  }
    
  
  }
  }>
<Picker.Item value="23" label="23"/>
<Picker.Item value="22" label="22"/>
<Picker.Item value="21" label="21"/>
<Picker.Item value="20" label="20"/>
<Picker.Item value="19" label="19"/>
<Picker.Item value="18" label="18"/>
<Picker.Item value="17" label="17"/>
<Picker.Item value="16" label="16"/>
<Picker.Item value="15" label="15"/>
<Picker.Item value="14" label="14"/>
<Picker.Item value="13" label="13"/>
<Picker.Item value="12" label="12"/>
<Picker.Item value="11" label="11"/>
<Picker.Item value="10" label="10"/>
<Picker.Item value="9" label="9"/>
<Picker.Item value="8" label="8"/>
<Picker.Item value="7" label="7"/>
<Picker.Item value="6" label="6"/>
<Picker.Item value="5" label="5"/>
<Picker.Item value="4" label="4"/>
<Picker.Item value="3" label="3"/>
<Picker.Item value="2" label="2"/>
<Picker.Item value="1" label="1"/>
<Picker.Item value="0" label="0"/>
</Picker>
<Picker style={{width:80}} selectedValue={this.state.Minute} onValueChange={(value)=>{
  this.setState({Minute:value,Message:"",CountForSet:0,CountforBlockingtheslot:0,Info:""})
  
  
      if(this.state.CountForSet==1)
  {
this.state.Dates.splice(this.state.Dates.length-1,1)
    this.state.Hours.splice(this.state.Hours.length-1,1)
    this.state.Minutes.splice(this.state.Minutes.length-1,1)
  }
  
  }
  }>
<Picker.Item value="00" label="00"/>
<Picker.Item value="15" label="15"/>
<Picker.Item value="30" label="30"/>
<Picker.Item value="45" label="45"/>
</Picker>

</View>
<Text style={{alignSelf:"center"}}>Date::{this.state.Date}</Text>
<View style={{flexDirection:"row",alignSelf:"center"}}>
<Text >Time::</Text>
<Text>{this.state.Hour}</Text>
<Text>:</Text>
<Text>{this.state.Minute}</Text>
<Text>{this.state.Zone}</Text>
</View>
<Text style={{alignSelf:"center",color:"red"}}>{this.state.Message}</Text>
<Text style={{alignSelf:"center",color:"red"}}>{this.state.Info}</Text>
<TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.saveDetails}>Set</Text></TouchableHighlight>
<Text></Text>
<TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.update}>Save</Text></TouchableHighlight>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.main()}}>Logout</Text>
</View>
</ImageBackground>
)



}



}